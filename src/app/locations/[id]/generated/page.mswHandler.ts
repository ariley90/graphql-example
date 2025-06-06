import * as Types from '../../../../generated/types';

import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
export type LocationQueryVariables = Types.Exact<{
  locationId: Types.Scalars['ID']['input'];
}>;


export type LocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', name?: string | null, dimension?: string | null, id?: string | null, residents: Array<{ __typename?: 'Character', name?: string | null, id?: string | null, image?: string | null } | null> } | null };


/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockLocationQuery(
 *   ({ query, variables }) => {
 *     const { locationId } = variables;
 *     return HttpResponse.json({
 *       data: { location }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockLocationQuery = (resolver: GraphQLResponseResolver<LocationQuery, LocationQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<LocationQuery, LocationQueryVariables>(
    'Location',
    resolver,
    options
  )
