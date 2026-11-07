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
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_16rem),radial-gradient(ellipse_at_50%_35%,#2a8cf0_0%,#1201A4_70%)] pb-20">
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
      <section className="mx-auto mt-10 max-w-5xl px-4 md:mt-12 md:px-8">
        <div className="rounded-[30px] bg-[radial-gradient(circle_at_center,#1376FD_18%,#65E7F6_100%)] p-5 pt-6 shadow-[0_18px_40px_rgba(0,0,0,0.25)] md:px-10 md:pt-8 md:pb-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-white [text-shadow:0_1px_8px_rgba(18,1,164,0.35)] md:mb-7 md:text-3xl">
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
