import Link from "next/link";
import type { ExploreTopic } from "@/lib/explore";

/**
 * One maths topic on the Explore Math page: a large symbol for the topic
 * in the Explore Math colours, with the topic name below. The whole card is a link.
 */
function Symbol({ kind }: { kind: ExploreTopic["symbol"] }) {
  const serif = "font-math text-white";
  switch (kind) {
    case "fraction":
      return (
        <span className={`${serif} flex flex-col items-center text-[30cqw] leading-none`}>
          <i>a</i>
          <span className="my-[3cqw] h-[2.5cqw] w-[36cqw] rounded-full bg-white" />
          <i>b</i>
        </span>
      );
    case "algebra":
      return <i className={`${serif} text-[52cqw] leading-none`}>x</i>;
    case "powers":
      return (
        <span className={`${serif} text-[32cqw] leading-none`}>
          √<i>x</i><sup className="text-[0.55em]">2</sup>
        </span>
      );
    case "geometry":
      return (
        <svg viewBox="0 0 120 100" className="w-[55cqw]" aria-hidden="true">
          <path d="M14 88 L14 12 L106 88 Z" fill="none" stroke="white" strokeWidth="5" strokeLinejoin="round" />
          <path d="M14 70 h18 v18" fill="none" stroke="#19E0F8" strokeWidth="4" />
        </svg>
      );
  }
}

export default function ExploreTopicCard({ topic }: { topic: ExploreTopic }) {
  return (
    <Link
      href={`/explore/${topic.slug}`}
      className="group flex flex-col items-center outline-none"
    >
      <span className="@container flex aspect-square w-full items-center justify-center rounded-[26px] bg-[radial-gradient(circle_at_center,#1376FD_18%,#65E7F6_100%)] shadow-[0_14px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_36px_rgba(25,224,248,0.55)] group-hover:ring-2 group-hover:ring-[#19E0F8] group-focus-visible:ring-4 group-focus-visible:ring-[#19E0F8]">
        <Symbol kind={topic.symbol} />
      </span>
      <h3 className="mt-3 text-center text-base font-semibold text-white transition-colors group-hover:text-[#19E0F8] md:text-lg">
        {topic.name}
      </h3>
    </Link>
  );
}
