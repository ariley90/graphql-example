"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import { Loading } from "@/components/loading";
import { LocationCard } from "@/features/locations";

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
