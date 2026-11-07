"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { btlCategories } from "@/lib/btl";

/**
 * Buttons to switch between the six Beat the Lightning categories.
 * Phones: one row you can swipe sideways, with the current category in view.
 * Larger screens: the buttons wrap onto one or two lines.
 */
export default function BtlCategoryNav({ current }: { current: string }) {
  const listRef = useRef<HTMLUListElement>(null);

  // Bring the current category into view in the swipeable row
  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector<HTMLElement>('[aria-current="page"]');
    if (list && active && list.scrollWidth > list.clientWidth) {
      list.scrollLeft = active.parentElement!.offsetLeft - 20;
    }
  }, [current]);

  return (
    <nav aria-label="Challenge categories" className="-mx-5 mt-6 sm:mx-0">
      <ul
        ref={listRef}
        className="flex snap-x gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {btlCategories.map((c) => {
          const isCurrent = c.slug === current;
          return (
            <li key={c.slug} className="shrink-0 snap-start scroll-ml-5">
              <Link
                href={`/beat-the-lightning/${c.slug}`}
                aria-current={isCurrent ? "page" : undefined}
                className={`block rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                  isCurrent
                    ? "border-white bg-white text-[#1201A4]"
                    : "border-cyan-300/50 text-white hover:border-white"
                }`}
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
