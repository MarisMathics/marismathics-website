import type { Metadata } from "next";
import ExploreTopicCard from "@/components/ExploreTopicCard";
import ChannelsBlock from "@/components/ChannelsBlock";
import { exploreTopics } from "@/lib/explore";

export const metadata: Metadata = {
  title: "Explore Math | MarisMathics",
  description:
    "Discover clear explanations and moments that make you smile, organized by math topic.",
};

export default function ExplorePage() {
  return (
    <main className="pb-20">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-4xl px-5 pt-8 text-center md:pt-12">
        <h1 className="text-[2.2rem] leading-tight font-bold text-[#19E0F8] md:text-6xl">
          Explore Math
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Discover clear explanations
          <br />
          and moments that make you smile
        </p>
      </section>

      {/* ===== Topics ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[24px] bg-[#1376FD] p-5 pt-6 md:px-10 md:pt-8 md:pb-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-white md:mb-7 md:text-3xl">
            Explore by topic
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-8">
            {exploreTopics.map((t) => (
              <ExploreTopicCard key={t.slug} topic={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Channels ===== */}
      <ChannelsBlock title="More math on the channels" />
    </main>
  );
}
