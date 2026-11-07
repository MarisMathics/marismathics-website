import type { Metadata } from "next";
import BtlCategoryCard from "@/components/BtlCategoryCard";
import { btlCategories } from "@/lib/btl";
import { gameLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beat the Lightning | MarisMathics",
  description:
    "Short, fast-paced math challenges. Can you beat the lightning?",
};

export default function BeatTheLightningPage() {
  return (
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_16rem),radial-gradient(ellipse_at_50%_35%,#1376FD_0%,#1201A4_70%)] pb-20">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-4xl px-5 pt-8 text-center md:pt-12">
        <h1 className="text-[2rem] leading-tight font-bold text-[#19E0F8] md:text-5xl lg:text-6xl">
          Welcome to the
          <br />
          <span className="whitespace-nowrap">Beat the Lightning</span> Universe
        </h1>
        <p className="mt-4 text-xl font-semibold text-white md:text-3xl">
          Can you beat the lightning?
        </p>
      </section>

      {/* ===== Six challenge categories ===== */}
      <section className="mx-auto mt-10 max-w-5xl px-4 md:mt-14 md:px-8">
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
          {btlCategories.map((c) => (
            <BtlCategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* ===== The game ===== */}
      <section className="mt-14 flex justify-center px-5">
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
