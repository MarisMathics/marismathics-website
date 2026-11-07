import type { Metadata } from "next";
import Link from "next/link";
import BtlCategoryCard from "@/components/BtlCategoryCard";
import { btlCategories } from "@/lib/btl";
import { gameLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beat the Lightning | MarisMathics",
  description:
    "Short, fast-paced math challenges. Can you beat the lightning? Choose your challenge.",
};

export default function BeatTheLightningPage() {
  return (
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_16rem),radial-gradient(ellipse_at_50%_35%,#1376FD_0%,#1201A4_70%)] pb-20">
      {/* ===== Hero: three sentences ===== */}
      <section className="mx-auto max-w-4xl px-5 pt-8 text-center md:pt-12">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#19E0F8] uppercase md:text-base">
          Welcome to the Beat the Lightning Universe.
        </p>
        <h1 className="mt-4 text-[2.2rem] leading-tight font-bold text-white md:text-6xl">
          Can you beat the lightning?
        </h1>
        <p className="mt-4 text-xl font-semibold text-white/90 md:text-2xl">
          Choose your Challenge.
        </p>
      </section>

      {/* ===== Six challenge categories ===== */}
      <section className="mx-auto mt-10 max-w-5xl px-4 md:mt-14 md:px-8">
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-10 md:gap-y-10 md:[&>*:nth-child(3n+2)]:mt-10">
          {btlCategories.map((c) => (
            <BtlCategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* ===== Start hint and the game ===== */}
      <section className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-6 px-5 text-center">
        <p className="text-lg text-white md:text-xl">
          New here? Start with{" "}
          <Link
            href="/beat-the-lightning/classics"
            className="font-bold text-[#19E0F8] underline decoration-2 underline-offset-4 hover:text-white"
          >
            Classics
          </Link>
          .
        </p>

        <a
          href={gameLink}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#19E0F8] px-6 py-2.5 font-bold text-white transition hover:bg-[#19E0F8] hover:text-[#1201A4]"
        >
          ⚡ Play the game
        </a>
      </section>
    </main>
  );
}
