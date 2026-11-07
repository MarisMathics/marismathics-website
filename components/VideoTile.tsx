"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { YtVideo } from "@/lib/youtube";

/** Fired when a video starts, so any other playing video stops. */
const PLAY_EVENT = "mm:video-play";

/**
 * A YouTube video on the site: shows the thumbnail first and only loads
 * the YouTube player when the visitor clicks (keeps the page fast).
 * Shorts are shown upright (9:16), regular videos landscape (16:9).
 *
 * show="number": "#163 An irrational diagonal" (Beat the Lightning)
 * show="format": format label above the caption (Explore Math)
 */
export default function VideoTile({
  video,
  show = "number",
}: {
  video: YtVideo;
  show?: "number" | "format";
}) {
  const [playing, setPlaying] = useState(false);

  // Only one video at a time: stop this one when another one starts
  useEffect(() => {
    const onPlay = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== video.id) setPlaying(false);
    };
    window.addEventListener(PLAY_EVENT, onPlay);
    return () => window.removeEventListener(PLAY_EVENT, onPlay);
  }, [video.id]);

  function play() {
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: video.id }));
    setPlaying(true);
  }

  return (
    <figure className="flex flex-col">
      <div
        className={`relative w-full overflow-hidden rounded-[20px] bg-[#1201A4] shadow-[0_8px_20px_rgba(0,0,0,0.2)] ring-1 ring-white/10 ${
          video.isShort ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={play}
            aria-label={`Play: ${video.title}`}
            className="group absolute inset-0 rounded-[20px] outline-none focus-visible:ring-4 focus-visible:ring-[#19E0F8]"
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.id}/${video.isShort ? "oardefault" : "hq720"}.jpg`}
              alt=""
              fill
              sizes={
                video.isShort
                  ? "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                  : "(max-width: 768px) 90vw, 480px"
              }
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute right-2.5 bottom-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1201A4] shadow-lg transition group-hover:scale-110 group-hover:bg-[#19E0F8]">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
            </span>
          </button>
        )}
      </div>
      {show === "number" ? (
        <figcaption className="mt-2 px-1 text-center text-sm leading-snug text-white">
          {video.nr && (
            <span className="mr-1.5 font-bold text-white">#{video.nr}</span>
          )}
          {video.caption}
        </figcaption>
      ) : (
        <figcaption
          className={`mt-2.5 flex flex-col gap-1 px-1 ${video.isShort ? "items-center text-center" : "items-start"}`}
        >
          {video.label && (
            <span className="text-xs font-bold tracking-wide text-white/80 uppercase">
              {video.label}
            </span>
          )}
          <span
            className={`leading-snug text-white ${video.isShort ? "text-sm text-white" : "text-base font-semibold md:text-lg"}`}
          >
            {video.caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
