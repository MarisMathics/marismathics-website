import type { Metadata } from "next";
import BtlCategoryCard from "@/components/BtlCategoryCard";
import SocialLinks from "@/components/SocialLinks";
import { btlCategories } from "@/lib/btl";
import { gameLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "BEAT THE LIGHTNING | MarisMathics",
  description:
    "Short, fast-paced math challenges. Can you beat the lightning?",
};

export default function BeatTheLightningPage() {
  return (
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_16rem),radial-gradient(ellipse_at_50%_35%,#1376FD_0%,#1201A4_70%)] pb-20">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-4xl px-5 pt-8 text-center md:pt-12">
        <h1 className="text-[2rem] leading-tight font-bold text-[#19E0F8] md:text-5xl lg:text-6xl">
          Welcome to the
          <br />
          <span className="md:whitespace-nowrap">BEAT THE LIGHTNING</span> Universe
        </h1>
      </section>

      {/* ===== Play: the game ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="flex items-center gap-8 rounded-[30px] bg-[radial-gradient(circle_at_30%_50%,#19E0F8_0%,#1376FD_70%)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.25)] md:px-10 md:py-7">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Can you beat the lightning?
            </h2>
            <a
              href={gameLink}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1201A4] px-8 py-3.5 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-[0_0_30px_rgba(18,1,164,0.55)]"
            >
              Play the game
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 4l6 6-6 6" />
              </svg>
            </a>
          </div>
          <a
            href={gameLink}
            tabIndex={-1}
            className="hidden w-64 shrink-0 overflow-hidden rounded-[22px] shadow-xl transition hover:scale-[1.03] md:block"
          >
            <img
              src="/beat-the-lightning/app-home.jpg"
              alt="Home screen of the Beat the Lightning game: Daily lightning and Your lightning"
              width={560}
              height={579}
              className="block w-full"
            />
          </a>
        </div>
      </section>

      {/* ===== Watch: six challenge categories ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-4 pt-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:px-10 md:pt-8 md:pb-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-white md:mb-7 md:text-left md:text-3xl">
            Watch the challenges
          </h2>
          <div className="grid grid-cols-2 items-start gap-x-3 gap-y-5 md:grid-cols-3 md:gap-x-8 md:gap-y-8">
            {btlCategories.map((c) => (
              <BtlCategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Channels ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.06] px-5 py-7 text-center shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:px-10 md:py-9">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              More lightning on the channels
            </h2>
            <p className="mt-2 text-white/85">
              A new MarisMathics video every other day.
            </p>
          </div>
          <div className="mt-5">
            <SocialLinks center />
          </div>
        </div>
      </section>
    </main>
  );
}
