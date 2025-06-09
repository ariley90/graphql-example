"use client";
import { useSuspenseQuery } from "@apollo/client";
import { graphql } from "@/gql/gql";
import { EpisodeQuery, EpisodeQueryVariables } from "@/gql/graphql";

const episodeQuery = graphql(`
  query Episode($episodeId: ID!) {
    episode(id: $episodeId) {
      air_date
      created
      episode
      id
      name
    }
  }
`);

export function EpisodeCard({ id }: { id: string }) {
  const { data } = useSuspenseQuery<EpisodeQuery, EpisodeQueryVariables>(
    episodeQuery,
    {
      variables: { episodeId: id },
      errorPolicy: "all", // Handle errors gracefully
    }
  );

  if (!data?.episode) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold">Episode Details</h2>
        <p className="text-sm">No episode data found.</p>
      </div>
    );
  }

  const { name, episode, air_date, created } = data.episode;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm">Episode: {episode}</p>
      <p className="text-sm">Air Date: {air_date}</p>
      <p className="text-sm">Created: {created}</p>
    </div>
  );
}
