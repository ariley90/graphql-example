/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Character($characterId: ID!) {\n    character(id: $characterId) {\n      id\n      image\n      name\n      species\n      status\n    }\n  }\n": typeof types.CharacterDocument,
    "\n  query Characters($page: Int) {\n    characters(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        name\n        id\n      }\n    }\n  }\n": typeof types.CharactersDocument,
    "\n  query Episode($episodeId: ID!) {\n    episode(id: $episodeId) {\n      air_date\n      created\n      episode\n      id\n      name\n    }\n  }\n": typeof types.EpisodeDocument,
    "\n  query Episodes($page: Int) {\n    episodes(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n": typeof types.EpisodesDocument,
    "\n  query Location($locationId: ID!) {\n    location(id: $locationId) {\n      name\n      dimension\n      id\n      residents {\n        name\n        id\n        image\n      }\n    }\n  }\n": typeof types.LocationDocument,
    "\n  query Locations($page: Int) {\n    locations(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n": typeof types.LocationsDocument,
    "\n  fragment Pagination on Info {\n    count\n    next\n    pages\n    prev\n  }\n": typeof types.PaginationFragmentDoc,
};
const documents: Documents = {
    "\n  query Character($characterId: ID!) {\n    character(id: $characterId) {\n      id\n      image\n      name\n      species\n      status\n    }\n  }\n": types.CharacterDocument,
    "\n  query Characters($page: Int) {\n    characters(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        name\n        id\n      }\n    }\n  }\n": types.CharactersDocument,
    "\n  query Episode($episodeId: ID!) {\n    episode(id: $episodeId) {\n      air_date\n      created\n      episode\n      id\n      name\n    }\n  }\n": types.EpisodeDocument,
    "\n  query Episodes($page: Int) {\n    episodes(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n": types.EpisodesDocument,
    "\n  query Location($locationId: ID!) {\n    location(id: $locationId) {\n      name\n      dimension\n      id\n      residents {\n        name\n        id\n        image\n      }\n    }\n  }\n": types.LocationDocument,
    "\n  query Locations($page: Int) {\n    locations(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n": types.LocationsDocument,
    "\n  fragment Pagination on Info {\n    count\n    next\n    pages\n    prev\n  }\n": types.PaginationFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Character($characterId: ID!) {\n    character(id: $characterId) {\n      id\n      image\n      name\n      species\n      status\n    }\n  }\n"): (typeof documents)["\n  query Character($characterId: ID!) {\n    character(id: $characterId) {\n      id\n      image\n      name\n      species\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Characters($page: Int) {\n    characters(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Characters($page: Int) {\n    characters(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Episode($episodeId: ID!) {\n    episode(id: $episodeId) {\n      air_date\n      created\n      episode\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Episode($episodeId: ID!) {\n    episode(id: $episodeId) {\n      air_date\n      created\n      episode\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Episodes($page: Int) {\n    episodes(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Episodes($page: Int) {\n    episodes(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Location($locationId: ID!) {\n    location(id: $locationId) {\n      name\n      dimension\n      id\n      residents {\n        name\n        id\n        image\n      }\n    }\n  }\n"): (typeof documents)["\n  query Location($locationId: ID!) {\n    location(id: $locationId) {\n      name\n      dimension\n      id\n      residents {\n        name\n        id\n        image\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Locations($page: Int) {\n    locations(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Locations($page: Int) {\n    locations(page: $page) {\n      info {\n        ...Pagination\n      }\n      results {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Pagination on Info {\n    count\n    next\n    pages\n    prev\n  }\n"): (typeof documents)["\n  fragment Pagination on Info {\n    count\n    next\n    pages\n    prev\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;