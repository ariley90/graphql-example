"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { CharactersQuery, CharactersQueryVariables } from "@/gql/graphql";
import { graphql } from "@/gql/gql";
import { Pagination } from "@/components/pagination";
import { FragmentType, getFragmentData } from "@/gql";
import Image from "next/image";

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

const characterFragment = graphql(`
  fragment CharacterProfile on Character {
    id
    image
    name
    species
    status
  }
`);

export type CharacterProps = {
  character: FragmentType<typeof characterFragment>;
};

export function CharacterProfile(props: CharacterProps) {
  const character = getFragmentData(characterFragment, props.character);
  return (
    <div>
      {character && <h2 className="text-lg font-bold">{character.name}</h2>}
      {character?.image && (
        <Image
          src={character.image}
          alt={character.name ?? "Unknown Character"}
          width={200}
          height={200}
        />
      )}
      {character && <div>{character.species}</div>}
      {character && <div>{character.status}</div>}
      <div className="flex gap-4 mt-4">
        <Link href={paths.character.getHref(Number(character.id) + 1)}>
          Next
        </Link>
      </div>
      <div>
        <Link href={paths.character.getHref(Number(character.id) - 1)}>
          Previous
        </Link>
      </div>
    </div>
  );
}
