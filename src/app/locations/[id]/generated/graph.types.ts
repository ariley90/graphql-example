import * as Types from '../../../../generated/types';

export type LocationQueryVariables = Types.Exact<{
  locationId: Types.Scalars['ID']['input'];
}>;


export type LocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', name?: string | null, dimension?: string | null, id?: string | null, residents: Array<{ __typename?: 'Character', name?: string | null, id?: string | null, image?: string | null } | null> } | null };
