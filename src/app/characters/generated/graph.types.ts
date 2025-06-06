import * as Types from '../../../generated/types';

export type CharactersQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type CharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null, next?: number | null, pages?: number | null, prev?: number | null } | null, results?: Array<{ __typename?: 'Character', name?: string | null, id?: string | null } | null> | null } | null };
