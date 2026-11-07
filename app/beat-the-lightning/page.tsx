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
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_16rem),radial-gradient(ellipse_at_50%_35%,#1376FD_0%,#1201A4_70%)] pb-20">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-4xl px-5 pt-8 text-center md:pt-12">
        <h1 className="text-[2rem] leading-tight font-bold text-[#19E0F8] md:text-5xl lg:text-6xl">
          Welcome to the
          <br />
          <span className="md:whitespace-nowrap">BEAT THE LIGHTNING</span> Universe
        </h1>
      </section>

      {/* ===== Play: the game ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <PlayBlock />
      </section>

      {/* ===== Watch: six challenge categories ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-4 pt-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:px-10 md:pt-8 md:pb-10">
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
