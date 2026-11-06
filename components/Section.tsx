import type { ReactNode } from "react";

/**
 * A content block on a World page, with a heading.
 */
type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

/** Small "Coming soon" label */
export function ComingSoon({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 flex items-start gap-3 rounded-3xl border border-dashed border-cyan-300/50 bg-white/5 p-5 text-white/90">
      <span className="shrink-0 rounded-full bg-[#19E0F8] px-3 py-1 text-xs font-bold tracking-wide text-[#1201A4] uppercase">
        Coming soon
      </span>
      <p className="leading-7">{children}</p>
    </div>
  );
}
