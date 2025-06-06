import * as Types from '../../../generated/types';

export type LocationsQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type LocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', info?: { __typename?: 'Info', count?: number | null, next?: number | null, pages?: number | null, prev?: number | null } | null, results?: Array<{ __typename?: 'Location', id?: string | null, name?: string | null } | null> | null } | null };
