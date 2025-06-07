"use client";
import { paths } from "@/config/paths";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { Suspense, use } from "react";
import { Pagination } from "@/components/pagination";
import { graphql } from "@/gql/gql";
import { LocationsQuery, LocationsQueryVariables } from "@/gql/graphql";
import { Loading } from "@/components/loading";

const query = graphql(`
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

function List({ page }: { page: number }) {
  const { data } = useSuspenseQuery<LocationsQuery, LocationsQueryVariables>(
    query,
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

export default function Locations({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | number }>;
}) {
  const page = use(searchParams)?.page || 1;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Locations</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Suspense fallback={<Loading />}>
            <List page={Number(page)} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
