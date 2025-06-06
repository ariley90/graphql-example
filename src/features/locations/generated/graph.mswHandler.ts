import * as Types from '../../../generated/types';

import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
type LocationsQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


type LocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', results?: Array<{ __typename?: 'Location', id?: string | null, name?: string | null } | null> | null } | null };


/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockLocationsQuery(
 *   ({ query, variables }) => {
 *     const { page } = variables;
 *     return HttpResponse.json({
 *       data: { locations }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockLocationsQuery = (resolver: GraphQLResponseResolver<LocationsQuery, LocationsQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<LocationsQuery, LocationsQueryVariables>(
    'Locations',
    resolver,
    options
  )
