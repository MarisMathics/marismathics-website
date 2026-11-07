import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { btlCategories, getBtlCategory } from "@/lib/btl";
import { gameLink } from "@/lib/site";

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
    title: `${category?.name ?? "Beat the Lightning"} | Beat the Lightning | MarisMathics`,
    description: "Can you beat the lightning? Solve each challenge before the lightning strikes.",
  };
}

export default async function BtlCollectionPage({ params }: Props) {
  const { slug } = await params;
  const category = getBtlCategory(slug);
  if (!category) notFound();

  return (
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_12rem),radial-gradient(ellipse_at_50%_25%,#1376FD_0%,#1201A4_65%)] pb-20">
      <div className="mx-auto max-w-5xl px-5 pt-6 md:px-8 md:pt-10">
        {/* Back to the Beat the Lightning page */}
        <Link
          href="/beat-the-lightning"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#19E0F8] hover:text-white"
        >
          <span aria-hidden="true">‹</span> BEAT THE LIGHTNING
        </Link>

        {/* Title and play button */}
        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h1 className="text-[2.2rem] leading-tight font-bold text-white md:text-5xl">
            {category.name}
          </h1>
          <a
            href={gameLink}
            className="inline-flex items-center gap-2 self-start rounded-full bg-[#19E0F8] px-6 py-3 font-bold text-[#1201A4] shadow-lg transition hover:scale-105 md:self-auto"
          >
            Play the game
          </a>
        </div>

        {/* The other categories */}
        <nav aria-label="Challenge categories" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {btlCategories.map((c) => {
              const current = c.slug === category.slug;
              return (
                <li key={c.slug}>
                  <Link
                    href={`/beat-the-lightning/${c.slug}`}
                    aria-current={current ? "page" : undefined}
                    className={`block rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      current
                        ? "border-white bg-white text-[#1201A4]"
                        : "border-cyan-300/50 text-white hover:border-white"
                    }`}
                  >
                    {c.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Videos: filled from the YouTube playlist once it exists */}
        <section className="mt-10">
          <div className="flex flex-col items-center gap-3 rounded-[30px] border border-dashed border-cyan-300/50 bg-white/5 px-6 py-14 text-center">
            <p className="text-xl font-semibold text-white">
              The {category.name} videos are on their way.
            </p>
            <p className="max-w-md text-white/80">
              In the meantime, you can play the game.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
