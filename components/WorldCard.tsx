import type { ReactNode } from "react";
import Compass from "@/components/Compass";

/**
 * One World card on the homepage: title, preview, GO button and teaser text.
 *
 * Sizes: phone = one card per row (max 350px wide),
 * tablet / small laptop = three compact cards side by side,
 * desktop (xl, ≥1280px) = the original 350px design.
 */
type WorldCardProps = {
  /** Card title; use <br /> for a line break */
  title: ReactNode;
  /** Tailwind background class (the card's gradient) */
  background: string;
  /** Preview inside the card: video, image or carousel */
  preview: ReactNode;
  /** Page the GO button leads to */
  href: string;
  /** Accessible label for the GO button */
  goLabel: string;
  /** Bold question below the GO button */
  teaser: string;
  /** Short description below the teaser */
  description: ReactNode;
};

export default function WorldCard({
  title,
  background,
  preview,
  href,
  goLabel,
  teaser,
  description,
}: WorldCardProps) {
  return (
    <article
      className={`mx-auto w-full max-w-[350px] rounded-[36px] ${background} p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(25,224,248,0.45)] md:rounded-[30px] md:p-4 xl:mx-0 xl:w-[350px] xl:rounded-[36px] xl:p-6`}
    >
      <h2 className="text-center text-[1.7rem] leading-tight text-slate-50 md:text-[1.35rem] xl:text-[1.7rem]">
        {title}
      </h2>

      <div className="mt-4 px-6 md:px-3 xl:px-6">
        <div className="overflow-hidden rounded-[28px] shadow-xl">{preview}</div>
      </div>

      <Compass href={href} label={goLabel} />

      <p className="mt-3 text-center text-lg font-semibold text-white md:text-base xl:text-lg">
        {teaser}
      </p>

      <p className="mt-2 text-center text-[16px] leading-6 text-white/90 md:text-[14px] md:leading-5 xl:text-[16px] xl:leading-6">
        {description}
      </p>
    </article>
  );
}
