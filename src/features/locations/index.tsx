"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Pagination } from "@/components/pagination";
import { graphql } from "@/gql/gql";
import {
  LocationQuery,
  LocationQueryVariables,
  LocationsQuery,
  LocationsQueryVariables,
} from "@/gql/graphql";
import Image from "next/image";

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

const locationQuery = graphql(`
  query Location($locationId: ID!) {
    location(id: $locationId) {
      name
      dimension
      id
      residents {
        name
        id
        image
      }
    }
  }
`);

export function LocationCard({ id }: { id: string }) {
  const { data } = useSuspenseQuery<LocationQuery, LocationQueryVariables>(
    locationQuery,
    {
      variables: { locationId: id },
    }
  );
  if (!data?.location) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold">Location Details</h2>
        <p className="text-sm">No location data found.</p>
      </div>
    );
  }

  const { name, dimension, residents } = data.location;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm">Dimension: {dimension}</p>
      <h3>Residents</h3>
      <ul className="grid grid-cols-5 gap-4">
        {residents.map((resident) => (
          <li
            key={resident?.id}
            className="text-sm flex flex-col items-center justify-around"
          >
            {resident?.name}
            {resident?.image && resident.id && (
              <Link href={paths.character.getHref(resident.id)}>
                <Image
                  src={resident.image}
                  alt={resident.name ?? "Unknown Resident"}
                  width={80}
                  height={80}
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
