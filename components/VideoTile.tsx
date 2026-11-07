"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { YtVideo } from "@/lib/youtube";

/** Fired when a video starts, so any other playing video stops. */
const PLAY_EVENT = "mm:video-play";

/**
 * A YouTube Short on the site: shows the thumbnail first and only loads
 * the YouTube player when the visitor clicks (keeps the page fast).
 */
export default function VideoTile({ video }: { video: YtVideo }) {
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
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[20px] bg-[#1201A4] shadow-[0_14px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/10">
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
              src={`https://i.ytimg.com/vi/${video.id}/oar1.jpg`}
              alt=""
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
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
      <figcaption className="mt-2 px-1 text-center text-sm leading-snug text-white/90">
        {video.nr && (
          <span className="mr-1.5 font-semibold text-[#19E0F8]">#{video.nr}</span>
        )}
        {video.caption}
      </figcaption>
    </figure>
  );
}
