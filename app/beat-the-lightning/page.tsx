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
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[24px] bg-[#1376FD] p-4 pt-6 md:px-10 md:pt-8 md:pb-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-white md:mb-7 md:text-3xl">
            Watch the challenges
          </h2>
          <div className="grid grid-cols-2 items-start gap-x-3 gap-y-5 md:grid-cols-3 md:gap-x-8 md:gap-y-8">
            {btlCategories.map((c) => (
              <BtlCategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Channels ===== */}
      <ChannelsBlock />
    </main>
  );
}
