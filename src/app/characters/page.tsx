"use client";
import { paths } from "@/config/paths";
import { gql, useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Suspense } from "react";
import {
  CharactersQuery,
  CharactersQueryVariables,
} from "./generated/graph.types";

const query = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        name
        id
      }
    }
  }
`;
function List() {
  const { data } = useSuspenseQuery<CharactersQuery, CharactersQueryVariables>(
    query,
    {
      variables: { page: 1 },
    }
  );

  return (
    <ol>
      {data?.characters?.results?.map((character) => (
        <li key={character?.id}>
          <Link href={paths.character.getHref(character?.id ?? 0)}>
            {character?.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Characters() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Characters</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Suspense fallback={<div>Loading...</div>}>
            <List />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
