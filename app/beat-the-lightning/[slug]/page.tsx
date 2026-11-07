import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { btlCategories, getBtlCategory } from "@/lib/btl";
import { getPlaylistVideos, playlistUrl } from "@/lib/youtube";
import VideoTile from "@/components/VideoTile";
import PlayBlock from "@/components/PlayBlock";
import CategoryNav from "@/components/CategoryNav";

/**
 * Collection page for one Beat the Lightning category,
 * e.g. /beat-the-lightning/classics. One page serves all six categories.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return btlCategories.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getBtlCategory(slug);
  return {
    title: `${category?.name ?? "BEAT THE LIGHTNING"} | BEAT THE LIGHTNING | MarisMathics`,
    description: "Can you beat the lightning? Solve each challenge before the lightning strikes.",
  };
}

export default async function BtlCollectionPage({ params }: Props) {
  const { slug } = await params;
  const category = getBtlCategory(slug);
  if (!category) notFound();

  const videos = await getPlaylistVideos(category.playlistId);

  return (
    <main className="pb-20">
      <div className="mx-auto max-w-5xl px-5 pt-6 md:px-8 md:pt-10">
        {/* Back to the Beat the Lightning page */}
        <Link
          href="/beat-the-lightning"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#19E0F8] hover:text-white"
        >
          <span aria-hidden="true">‹</span> BEAT THE LIGHTNING
        </Link>

        <h1 className="mt-4 text-[2.2rem] leading-tight font-bold text-white md:text-5xl">
          {category.name}
        </h1>

        {/* The other categories */}
        <CategoryNav
          items={btlCategories}
          basePath="/beat-the-lightning"
          current={category.slug}
          label="Challenge categories"
        />

        {/* Videos: read from the YouTube playlist (newest first) */}
        <section className="mt-10">
          {videos.length > 0 ? (
            <>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8">
                {videos.map((v) => (
                  <li key={v.id}>
                    <VideoTile video={v} />
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-center">
                <a
                  href={playlistUrl(category.playlistId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-2.5 font-semibold text-white transition hover:border-[#19E0F8] hover:text-[#19E0F8]"
                >
                  See all {category.name} videos on YouTube
                </a>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-[30px] border border-dashed border-cyan-300/50 bg-white/5 px-6 py-14 text-center">
              <p className="text-xl font-semibold text-white">
                The {category.name} videos are on their way.
              </p>
            </div>
          )}
        </section>

        {/* Play the game, after watching */}
        <section className="mt-14">
          <PlayBlock />
        </section>
      </div>
    </main>
  );
}
