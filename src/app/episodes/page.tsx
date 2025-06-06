"use client";
import { paths } from "@/config/paths";
import { gql, useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Suspense, use } from "react";
import { EpisodesQuery, EpisodesQueryVariables } from "./generated/page.types";

const query = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        next
        pages
        prev
      }
      results {
        id
        name
      }
    }
  }
`;

function List({ page }: { page: number }) {
  const { data } = useSuspenseQuery<EpisodesQuery, EpisodesQueryVariables>(
    query,
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
      <div className="flex mt-4 gap-4">
        <div>Count: {data?.episodes?.info?.count}</div>
        <div>Pages: {data?.episodes?.info?.pages}</div>
        {data?.episodes?.info?.prev && (
          <Link href={paths.episodes.getHref(data.episodes.info.prev)}>
            prev
          </Link>
        )}
        {data?.episodes?.info?.next && (
          <Link href={paths.episodes.getHref(data.episodes.info.next)}>
            next
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Episodes({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | number }>;
}) {
  const page = use(searchParams)?.page || 1;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Episodes</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Suspense fallback={<div>Loading...</div>}>
            <List page={Number(page)} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
