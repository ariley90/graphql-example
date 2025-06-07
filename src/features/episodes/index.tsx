"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Pagination } from "@/components/pagination";
import { graphql } from "@/gql/gql";
import {
  EpisodeQuery,
  EpisodeQueryVariables,
  EpisodesQuery,
  EpisodesQueryVariables,
} from "@/gql/graphql";

const episodesQuery = graphql(`
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        ...Pagination
      }
      results {
        id
        name
      }
    }
  }
`);

export function EpisodeList({ page }: { page: number }) {
  const { data } = useSuspenseQuery<EpisodesQuery, EpisodesQueryVariables>(
    episodesQuery,
    {
      variables: { page },
    }
  );

  return (
    <div>
      <ol>
        {data?.episodes?.results?.map((ep) => (
          <li key={ep?.id}>
            <Link href={paths.episode.getHref(ep?.id ?? 0)}>{ep?.name}</Link>
          </li>
        ))}
      </ol>
      {data?.episodes?.info && (
        <Pagination info={data.episodes.info} href={paths.episodes.getHref} />
      )}
    </div>
  );
}

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
