"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Pagination } from "@/components/pagination";
import { graphql } from "@/gql/gql";
import { EpisodesQuery, EpisodesQueryVariables } from "@/gql/graphql";

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
