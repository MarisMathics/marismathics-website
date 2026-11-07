"use client";

import { useState } from "react";
import type { YtVideo } from "@/lib/youtube";

/**
 * A YouTube Short on the site: shows the thumbnail first and only loads
 * the YouTube player when the visitor clicks (keeps the page fast).
 */
export default function VideoTile({ video }: { video: YtVideo }) {
  const [playing, setPlaying] = useState(false);

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
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${video.title}`}
            className="group absolute inset-0 outline-none focus-visible:ring-4 focus-visible:ring-[#19E0F8]"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/oar2.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#1201A4]/0 transition group-hover:bg-[#1201A4]/20">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#1201A4] shadow-lg transition group-hover:scale-110 group-hover:bg-[#19E0F8]">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 px-1 text-center text-sm leading-snug text-white/90">
        {video.caption}
        {video.nr && (
          <span className="ml-1.5 font-semibold text-[#19E0F8]">#{video.nr}</span>
        )}
      </figcaption>
    </figure>
  );
}
