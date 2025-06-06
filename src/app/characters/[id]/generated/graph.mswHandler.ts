import * as Types from '../../../../generated/types';

import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
type CharacterQueryVariables = Types.Exact<{
  characterId: Types.Scalars['ID']['input'];
}>;


type CharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, image?: string | null, name?: string | null, species?: string | null, status?: string | null } | null };


/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCharacterQuery(
 *   ({ query, variables }) => {
 *     const { characterId } = variables;
 *     return HttpResponse.json({
 *       data: { character }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCharacterQuery = (resolver: GraphQLResponseResolver<CharacterQuery, CharacterQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<CharacterQuery, CharacterQueryVariables>(
    'Character',
    resolver,
    options
  )
