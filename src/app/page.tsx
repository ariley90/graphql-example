import { paths } from "@/config/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">Rick and `Morty Index</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href={paths.characters.getHref()}
            className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]"
          >
            Characters
          </Link>
          <Link
            href={paths.episodes.getHref()}
            className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]"
          >
            Episodes
          </Link>
          <Link
            href={paths.locations.getHref()}
            className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]"
          >
            Locations
          </Link>
        </div>
      </main>
    </div>
  );
}
