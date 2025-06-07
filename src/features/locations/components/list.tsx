"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Pagination } from "@/components/pagination";
import { graphql } from "@/gql/gql";
import { LocationsQuery, LocationsQueryVariables } from "@/gql/graphql";

const locationsQuery = graphql(`
  query Locations($page: Int) {
    locations(page: $page) {
      info {
        ...Pagination
      }
      results {
        id
        name
      }
    }
  }
`);

export function LocationList({ page }: { page: number }) {
  const { data } = useSuspenseQuery<LocationsQuery, LocationsQueryVariables>(
    locationsQuery,
    {
      variables: { page },
    }
  );

  return (
    <div>
      <ol>
        {data?.locations?.results?.map((location) => (
          <li key={location?.id}>
            <Link href={paths.location.getHref(location?.id ?? 1)}>
              {location?.name}
            </Link>
          </li>
        ))}
      </ol>
      {data?.locations?.info && (
        <Pagination info={data.locations.info} href={paths.locations.getHref} />
      )}
    </div>
  );
}
