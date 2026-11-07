import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryNav from "@/components/CategoryNav";
import VideoTile from "@/components/VideoTile";
import { exploreTopics, getExploreTopic } from "@/lib/explore";
import { getPlaylistVideos, playlistUrl } from "@/lib/youtube";

/**
 * One maths topic, e.g. /explore/fractions. One page serves all topics.
 * Videos come from the topic's YouTube playlist: regular videos first
 * (large), then Shorts, each with its format.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return exploreTopics.map((t) => ({ slug: t.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getExploreTopic(slug);
  return {
    title: `${topic?.name ?? "Explore Math"} | Explore Math | MarisMathics`,
    description: "Clear explanations and moments that make you smile.",
  };
}

export default async function ExploreTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getExploreTopic(slug);
  if (!topic) notFound();

  const videos = await getPlaylistVideos(topic.playlistId);
  const longVideos = videos.filter((v) => !v.isShort);
  const shorts = videos.filter((v) => v.isShort);

  return (
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_12rem),radial-gradient(ellipse_at_50%_25%,#2a8cf0_0%,#1201A4_65%)] pb-20">
      <div className="mx-auto max-w-5xl px-5 pt-6 md:px-8 md:pt-10">
        <Link
          href="/explore"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#19E0F8] hover:text-white"
        >
          <span aria-hidden="true">‹</span> Explore Math
        </Link>

        <h1 className="mt-4 text-[2.2rem] leading-tight font-bold text-white md:text-5xl">
          {topic.name}
        </h1>

        <CategoryNav
          items={exploreTopics}
          basePath="/explore"
          current={topic.slug}
          label="Math topics"
        />

        {videos.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-[30px] border border-dashed border-cyan-300/50 bg-white/5 px-6 py-14 text-center">
            <p className="text-xl font-semibold text-white">
              {topic.name} videos are on their way.
            </p>
          </div>
        ) : (
          <>
            {/* Regular videos: large */}
            {longVideos.length > 0 && (
              <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
                {longVideos.map((v) => (
                  <li key={v.id}>
                    <VideoTile video={v} show="format" />
                  </li>
                ))}
              </ul>
            )}

            {/* Shorts */}
            {shorts.length > 0 && (
              <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8">
                {shorts.map((v) => (
                  <li key={v.id}>
                    <VideoTile video={v} show="format" />
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-12 flex justify-center">
              <a
                href={playlistUrl(topic.playlistId)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-2.5 font-semibold text-white transition hover:border-[#19E0F8] hover:text-[#19E0F8]"
              >
                See all {topic.name} videos on YouTube
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
