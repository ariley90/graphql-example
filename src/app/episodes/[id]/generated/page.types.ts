import * as Types from '../../../../generated/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type EpisodeQueryVariables = Types.Exact<{
  episodeId: Types.Scalars['ID']['input'];
}>;


export type EpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', air_date?: string | null, created?: string | null, episode?: string | null, id?: string | null, name?: string | null } | null };


export const EpisodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Episode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"air_date"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"episode"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useEpisodeQuery__
 *
 * To run a query within a React component, call `useEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodeQuery({
 *   variables: {
 *      episodeId: // value for 'episodeId'
 *   },
 * });
 */
export function useEpisodeQuery(baseOptions: Apollo.QueryHookOptions<EpisodeQuery, EpisodeQueryVariables> & ({ variables: EpisodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, options);
      }
export function useEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, options);
        }
export function useEpisodeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, options);
        }
export type EpisodeQueryHookResult = ReturnType<typeof useEpisodeQuery>;
export type EpisodeLazyQueryHookResult = ReturnType<typeof useEpisodeLazyQuery>;
export type EpisodeSuspenseQueryHookResult = ReturnType<typeof useEpisodeSuspenseQuery>;
export type EpisodeQueryResult = Apollo.QueryResult<EpisodeQuery, EpisodeQueryVariables>;