"use client";
import { Suspense, use } from "react";
import { Loading } from "@/components/loading";
import { LocationList } from "@/features/locations";

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
            <LocationList page={Number(page)} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
