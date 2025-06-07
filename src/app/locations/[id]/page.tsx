"use client";

import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import { LocationQuery, LocationQueryVariables } from "@/gql/graphql";
import { paths } from "@/config/paths";
import Link from "next/link";
import { graphql } from "@/gql";
import { Loading } from "@/components/loading";

const query = graphql(`
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

function LocationCard({ id }: { id: string }) {
  const { data } = useSuspenseQuery<LocationQuery, LocationQueryVariables>(
    query,
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

export default function Location() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="justify-items-center  p-8 pb-20 gap-4 sm:p-20 ">
      <h1>LOCATION</h1>
      <Suspense fallback={<Loading />}>
        <LocationCard id={id} />
      </Suspense>
    </div>
  );
}
