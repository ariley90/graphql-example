"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import { Loading } from "@/components/loading";
import { EpisodeCard } from "@/features/episodes";

export default function Episode() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="justify-items-center  p-8 pb-20 gap-4 sm:p-20 ">
      <h1>EPISODE</h1>
      <Suspense fallback={<Loading />}>
        <EpisodeCard id={id} />
      </Suspense>
    </div>
  );
}
