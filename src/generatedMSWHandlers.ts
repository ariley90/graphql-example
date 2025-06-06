import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
export type CharacterQueryVariables = Exact<{
  characterId: Scalars['ID']['input'];
}>;


export type CharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, image?: string | null, name?: string | null, species?: string | null, status?: string | null } | null };

export type CharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', name?: string | null, id?: string | null } | null> | null } | null };

export type EpisodeQueryVariables = Exact<{
  episodeId: Scalars['ID']['input'];
}>;


export type EpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', air_date?: string | null, created?: string | null, episode?: string | null, id?: string | null, name?: string | null } | null };

export type EpisodesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EpisodesQuery = { __typename?: 'Query', episodes?: { __typename?: 'Episodes', info?: { __typename?: 'Info', count?: number | null, next?: number | null, pages?: number | null, prev?: number | null } | null, results?: Array<{ __typename?: 'Episode', id?: string | null, name?: string | null } | null> | null } | null };

export type LocationQueryVariables = Exact<{
  locationId: Scalars['ID']['input'];
}>;


export type LocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', name?: string | null, dimension?: string | null, id?: string | null, residents: Array<{ __typename?: 'Character', name?: string | null, id?: string | null, image?: string | null } | null> } | null };

export type LocationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', results?: Array<{ __typename?: 'Location', id?: string | null, name?: string | null } | null> | null } | null };


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

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockEpisodesQuery(
 *   ({ query, variables }) => {
 *     const { page } = variables;
 *     return HttpResponse.json({
 *       data: { episodes }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockEpisodesQuery = (resolver: GraphQLResponseResolver<EpisodesQuery, EpisodesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<EpisodesQuery, EpisodesQueryVariables>(
    'Episodes',
    resolver,
    options
  )

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
