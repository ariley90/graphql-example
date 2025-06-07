"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
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
export function CharacterList({ page }: { page: number }) {
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
