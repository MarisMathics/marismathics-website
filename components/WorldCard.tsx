import type { ReactNode } from "react";
import Link from "next/link";

/**
 * One World card on the homepage. The whole card is one link;
 * the question at the bottom is styled as the button.
 *
 * Sizes: phone = one card per row (max 350px wide),
 * tablet / small laptop = three compact cards side by side,
 * desktop (xl, ≥1280px) = 350px cards.
 */
type WorldCardProps = {
  /** Card title; use <br /> for a line break */
  title: ReactNode;
  /** Tailwind background class (the card's gradient) */
  background: string;
  /** Preview inside the card: video, image or carousel */
  preview: ReactNode;
  /** Page the card leads to */
  href: string;
  /** Short description below the preview */
  description: ReactNode;
  /** The question on the button, e.g. "Can you beat the lightning?" */
  cta: string;
};

export default function WorldCard({
  title,
  background,
  preview,
  href,
  description,
  cta,
}: WorldCardProps) {
  return (
    <Link
      href={href}
      className={`group mx-auto flex w-full max-w-[350px] flex-col rounded-[36px] ${background} p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 outline-none hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(25,224,248,0.45)] focus-visible:ring-4 focus-visible:ring-[#19E0F8] md:rounded-[30px] md:p-3 lg:p-4 xl:mx-0 xl:w-[350px] xl:rounded-[36px] xl:p-6`}
    >
      <h2 className="text-center text-[1.7rem] leading-tight text-slate-50 md:text-[1.35rem] xl:text-[1.7rem]">
        {title}
      </h2>

      <div className="mt-4 px-6 md:px-3 xl:px-6">
        <div className="overflow-hidden rounded-[28px] shadow-xl">{preview}</div>
      </div>

      <p className="mt-5 mb-5 text-center text-[16px] leading-6 text-white/95 md:text-[14px] md:leading-5 xl:text-[16px] xl:leading-6">
        {description}
      </p>

      <span className="mx-auto mt-auto inline-flex items-center gap-2 self-center rounded-full bg-white px-5 py-2.5 text-center text-base leading-tight font-bold whitespace-nowrap text-[#1201A4] shadow-[0_6px_18px_rgba(18,1,164,0.25)] transition-colors duration-300 group-hover:bg-[#1201A4] group-hover:text-white md:px-3 md:text-xs lg:px-4 lg:text-sm xl:px-5 xl:text-base">
        {cta}
        <svg
          viewBox="0 0 20 20"
          className="h-4 w-4 shrink-0 transition-transform md:hidden lg:block duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 4l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
