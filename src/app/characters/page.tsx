"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Suspense, use } from "react";
import { CharactersQuery, CharactersQueryVariables } from "@/gql/graphql";
import { graphql } from "@/gql/gql";
import { Pagination } from "@/components/pagination";

const query = graphql(`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        ...Pagination
      }
      results {
        name
        id
      }
    }
  }
`);
function List({ page }: { page: number }) {
  const { data } = useSuspenseQuery<CharactersQuery, CharactersQueryVariables>(
    query,
    {
      variables: { page },
    }
  );

  return (
    <div>
      <ol>
        {data?.characters?.results?.map((character) => (
          <li key={character?.id}>
            <Link href={paths.character.getHref(character?.id ?? 0)}>
              {character?.name}
            </Link>
          </li>
        ))}
      </ol>
      {data?.characters?.info && (
        <Pagination
          info={data.characters.info}
          href={paths.characters.getHref}
        />
      )}
    </div>
  );
}

export default function Characters({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | number }>;
}) {
  const page = use(searchParams)?.page || 1;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Characters</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Suspense fallback={<div>Loading...</div>}>
            <List page={Number(page)} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
