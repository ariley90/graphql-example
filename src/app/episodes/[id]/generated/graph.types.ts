import * as Types from '../../../../generated/types';

export type EpisodeQueryVariables = Types.Exact<{
  episodeId: Types.Scalars['ID']['input'];
}>;


export type EpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', air_date?: string | null, created?: string | null, episode?: string | null, id?: string | null, name?: string | null } | null };
