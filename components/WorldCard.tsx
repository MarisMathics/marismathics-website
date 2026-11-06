import type { ReactNode } from "react";
import Compass from "@/components/Compass";

/**
 * One World card on the homepage: title, preview, GO button and teaser text.
 */
type WorldCardProps = {
  /** Card title; use <br /> for a line break */
  title: ReactNode;
  /** Tailwind background class (the card's gradient) */
  background: string;
  /** Preview inside the card: video, image or carousel */
  preview: ReactNode;
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
  goLabel,
  teaser,
  description,
}: WorldCardProps) {
  return (
    <article
      className={`w-[350px] rounded-[36px] ${background} p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(25,224,248,0.45)]`}
    >
      <h2 className="text-center text-[1.7rem] leading-tight text-slate-50">
        {title}
      </h2>

      <div className="mt-4 px-6">
        <div className="overflow-hidden rounded-[28px] shadow-xl">{preview}</div>
      </div>

      <Compass label={goLabel} />

      <p className="mt-3 text-center text-lg font-semibold text-white">
        {teaser}
      </p>

      <p className="mt-2 text-center text-[16px] leading-6 text-white/90">
        {description}
      </p>
    </article>
  );
}
