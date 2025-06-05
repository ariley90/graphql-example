"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { Suspense } from "react";
const query = gql`
  query Episode($episodeId: ID!) {
    episode(id: $episodeId) {
      air_date
      created
      episode
      id
      name
    }
  }
`;

type EpisodeQueryResult = {
  episode: {
    air_date: string;
    created: string;
    episode: string;
    id: string;
    name: string;
  };
};

function EpisodeCard({ id }: { id: string }) {
  const { data } = useSuspenseQuery<EpisodeQueryResult>(query, {
    variables: { episodeId: id },
  });
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

export default function Episode() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 ">
      <h1>EPISODE</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <EpisodeCard id={id} />
      </Suspense>
    </div>
  );
}
