"use client";
import { paths } from "@/config/paths";
import Link from "next/link";
import { graphql } from "@/gql/gql";
import { FragmentType, getFragmentData } from "@/gql";
import Image from "next/image";

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
