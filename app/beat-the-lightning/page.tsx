import type { Metadata } from "next";
import BtlCategoryCard from "@/components/BtlCategoryCard";
import ChannelsBlock from "@/components/ChannelsBlock";
import PlayBlock from "@/components/PlayBlock";
import { btlCategories } from "@/lib/btl";

export const metadata: Metadata = {
  title: "BEAT THE LIGHTNING | MarisMathics",
  description:
    "Short, fast-paced math challenges. Can you beat the lightning?",
};

export default function BeatTheLightningPage() {
  return (
    <main className="pb-20">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-4xl px-5 pt-8 text-center md:pt-12">
        <h1 className="text-[2.2rem] leading-tight font-bold text-[#19E0F8] md:text-6xl">
          BEAT THE LIGHTNING
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Solve each challenge
          <br />
          before the lightning strikes
        </p>
      </section>

      {/* ===== Play: the game ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <PlayBlock />
      </section>

      {/* ===== Watch: six challenge categories ===== */}
      <section className="mx-auto mt-14 max-w-4xl px-4 md:mt-20 md:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-white md:mb-8 md:text-3xl">
          Watch the challenges
        </h2>
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {btlCategories.map((c) => (
            <BtlCategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* ===== Channels ===== */}
      <ChannelsBlock />
    </main>
  );
}
