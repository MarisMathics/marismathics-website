import type { ReactNode } from "react";

/**
 * Header band at the top of each World page, in that World's gradient.
 */
type WorldHeroProps = {
  title: string;
  teaser: string;
  background: string;
  children?: ReactNode;
  /** Optional visual shown next to the text (stacked on phones) */
  aside?: ReactNode;
};

export default function WorldHero({
  title,
  teaser,
  background,
  children,
  aside,
}: WorldHeroProps) {
  return (
    <section className="mx-auto mt-4 max-w-6xl px-5 md:px-8">
      <div
        className={`${background} grid items-center gap-8 rounded-[36px] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:p-12 ${
          aside ? "md:grid-cols-[1fr_auto]" : ""
        }`}
      >
        <div>
          <h1 className="text-[2.1rem] leading-tight font-semibold text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-xl font-semibold text-white md:text-2xl">
            {teaser}
          </p>
          {children && (
            <div className="mt-4 max-w-xl text-base leading-7 text-white/90 md:text-lg md:leading-8">
              {children}
            </div>
          )}
        </div>

        {aside && <div className="mx-auto w-full max-w-[260px]">{aside}</div>}
      </div>
    </section>
  );
}
