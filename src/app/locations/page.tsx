"use client";
import { paths } from "@/config/paths";
import { gql, useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Suspense } from "react";

const query = gql`
  query Locations($page: Int) {
    locations(page: $page) {
      results {
        id
        name
      }
    }
  }
`;

type LocationsQueryResult = {
  locations: {
    results: {
      id: string;
      name: string;
    }[];
  };
};

function List() {
  const { data } = useSuspenseQuery<LocationsQueryResult>(query, {
    variables: { page: 1 },
  });

  return (
    <ol>
      {data.locations.results.map((location) => (
        <li key={location.id}>
          <Link href={paths.location.getHref(location.id)}>
            {location.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function Locations() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Locations</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Suspense fallback={<div>Loading...</div>}>
            <List />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
