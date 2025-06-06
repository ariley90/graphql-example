import { paths } from "@/config/paths";
import { getClient } from "@/lib/apolloClient";

import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import {
  CharacterQuery,
  CharacterQueryVariables,
} from "./generated/page.types";

const query = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      image
      name
      species
      status
    }
  }
`;

export default async function Graph({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getClient().query<
    CharacterQuery,
    CharacterQueryVariables
  >({
    query,
    variables: { characterId: id },
  });
  return (
    <div className="justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 ">
      <h1>HIYA</h1>
      {data.character && (
        <h2 className="text-lg font-bold">{data.character.name}</h2>
      )}
      {data?.character?.image && (
        <Image
          src={data.character.image}
          alt={data.character.name ?? "Unknown Character"}
          width={200}
          height={200}
        />
      )}
      {data.character && <div>{data.character.species}</div>}
      {data.character && <div>{data.character.status}</div>}
      <div className="flex gap-4 mt-4">
        <Link href={paths.character.getHref(Number(id) + 1)}>Next</Link>
      </div>
      <div>
        <Link href={paths.character.getHref(Number(id) - 1)}>Previous</Link>
      </div>
    </div>
  );
}
