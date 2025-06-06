import * as Types from '../../../../generated/types';

export type CharacterQueryVariables = Types.Exact<{
  characterId: Types.Scalars['ID']['input'];
}>;


export type CharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, image?: string | null, name?: string | null, species?: string | null, status?: string | null } | null };
