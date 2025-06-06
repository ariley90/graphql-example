import * as Types from '../../../generated/types';

import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
type CharactersQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


type CharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', count?: number | null, next?: number | null, pages?: number | null, prev?: number | null } | null, results?: Array<{ __typename?: 'Character', name?: string | null, id?: string | null } | null> | null } | null };


/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCharactersQuery(
 *   ({ query, variables }) => {
 *     const { page } = variables;
 *     return HttpResponse.json({
 *       data: { characters }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCharactersQuery = (resolver: GraphQLResponseResolver<CharactersQuery, CharactersQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<CharactersQuery, CharactersQueryVariables>(
    'Characters',
    resolver,
    options
  )
