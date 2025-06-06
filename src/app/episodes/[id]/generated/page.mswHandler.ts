import * as Types from '../../../../generated/types';

import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
export type EpisodeQueryVariables = Types.Exact<{
  episodeId: Types.Scalars['ID']['input'];
}>;


export type EpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', air_date?: string | null, created?: string | null, episode?: string | null, id?: string | null, name?: string | null } | null };


/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockEpisodeQuery(
 *   ({ query, variables }) => {
 *     const { episodeId } = variables;
 *     return HttpResponse.json({
 *       data: { episode }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockEpisodeQuery = (resolver: GraphQLResponseResolver<EpisodeQuery, EpisodeQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<EpisodeQuery, EpisodeQueryVariables>(
    'Episode',
    resolver,
    options
  )
