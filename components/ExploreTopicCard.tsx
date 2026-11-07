import Link from "next/link";
import Image from "next/image";
import type { ExploreTopic } from "@/lib/explore";

/**
 * One maths topic on the Explore Math page: the thumbnail of one of
 * Mariska's videos with the topic name below. The whole card is a link.
 */
export default function ExploreTopicCard({ topic }: { topic: ExploreTopic }) {
  const { videoId, isShort } = topic.cover;
  return (
    <Link
      href={`/explore/${topic.slug}`}
      className="group mx-auto flex w-full max-w-[260px] flex-col rounded-[20px] outline-none focus-visible:ring-4 focus-visible:ring-[#19E0F8]"
    >
      <span className="relative block aspect-[9/16] w-full overflow-hidden rounded-[20px] bg-[#1376FD] shadow-[0_14px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_36px_rgba(25,224,248,0.55)] group-hover:ring-2 group-hover:ring-[#19E0F8]">
        {isShort ? (
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/oardefault.jpg`}
            alt=""
            fill
            sizes="(max-width: 768px) 45vw, 240px"
            className="object-cover"
          />
        ) : (
          <>
            {/* Landscape thumbnail: shown whole, on a blurred copy of itself */}
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
              alt=""
              fill
              sizes="120px"
              className="scale-125 object-cover opacity-70 blur-xl"
            />
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
              alt=""
              fill
              sizes="(max-width: 768px) 45vw, 240px"
              className="object-contain drop-shadow-xl"
            />
          </>
        )}
      </span>
      <h3 className="mt-3 text-center text-base font-semibold text-white transition-colors group-hover:text-[#19E0F8] md:text-lg">
        {topic.name}
      </h3>
    </Link>
  );
}
