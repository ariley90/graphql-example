import { gql } from '@apollo/client';

export const locationsQuery = gql`
  query Locations($page: Int) {
    locations(page: $page) {
      results {
        id
        name
      }
    }
  }
`;