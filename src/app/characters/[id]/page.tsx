import { getClient } from "@/lib/apolloClient";

import { CharacterQuery, CharacterQueryVariables } from "@/gql/graphql";
import { Metadata } from "next";
import { graphql } from "@/gql/gql";
import { CharacterProfile } from "@/features/characters";

const query = graphql(`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      ...CharacterProfile
    }
  }
`);

export const metadata: Metadata = {
  title: "Rick and Morty Index - Characters",
  description: "Based on beachproof react",
};

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
    <div className="justify-items-center  p-8 pb-20 gap-4 sm:p-20 ">
      <h1>CHARACTER</h1>
      {data?.character && <CharacterProfile character={data.character} />}
    </div>
  );
}
