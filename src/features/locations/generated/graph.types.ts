import * as Types from '../../../generated/types';

export type LocationsQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type LocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'Locations', results?: Array<{ __typename?: 'Location', id?: string | null, name?: string | null } | null> | null } | null };
