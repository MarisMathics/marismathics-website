import type { Metadata } from "next";
import ChannelsBlock from "@/components/ChannelsBlock";
import { contactEmail, gameLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "More MarisMathics | MarisMathics",
  description:
    "Meet Mariska, the math teacher behind MarisMathics, and discover what she makes.",
};

const panel =
  "rounded-[30px] bg-[linear-gradient(to_bottom,#1376fd_0%,#4EABF3_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.25)]";
const h2 =
  "text-2xl font-bold text-white [text-shadow:0_1px_8px_rgba(18,1,164,0.35)] md:text-3xl";

/** Small lightning bolt in the brand colors (instead of the yellow emoji) */
function Bolt() {
  return (
    <svg viewBox="0 0 12 20" className="mx-0.5 inline-block h-[1em] w-[0.6em] -translate-y-px align-middle" aria-hidden="true">
      <path d="M8 0 0 11.5h4.5L3 20l9-12H7.2L8 0z" fill="#1201A4" />
    </svg>
  );
}

export default function MorePage() {
  return (
    <main className="bg-[linear-gradient(to_bottom,#1201A4_0%,rgba(18,1,164,0)_16rem),radial-gradient(ellipse_at_50%_35%,#1376FD_0%,#1201A4_70%)] pb-20">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-4xl px-5 pt-8 text-center md:pt-12">
        <h1 className="text-[2.2rem] leading-tight font-bold text-[#19E0F8] md:text-6xl">
          More MarisMathics
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Meet the teacher
          <br />
          behind the lightning
        </p>
      </section>

      {/* ===== Meet Mariska ===== */}
      <section className="mx-auto mt-10 max-w-5xl px-4 md:mt-12 md:px-8">
        <div
          className={`${panel} flex flex-col items-center gap-6 p-6 md:flex-row md:items-start md:gap-10 md:p-10`}
        >
          <img
            src="/worlds/more/mariska-portrait.jpg"
            alt="Mariska, the math teacher behind MarisMathics"
            width={720}
            height={720}
            className="w-48 shrink-0 rounded-full shadow-xl ring-4 ring-white/70 md:w-64"
          />
          <div className="md:text-left">
            <h2 className={`${h2} text-center md:text-left`}>Hi, I’m Mariska</h2>
            <div className="mt-4 space-y-4 text-lg leading-8 text-white">
              <p>
                I’m the “Maris” behind MarisMathics: a math teacher in
                secondary school in Belgium who loves turning tricky concepts
                into clear insights, with a few laughs along the way.
              </p>
              <p>
                I didn’t start out as a teacher. I studied business
                engineering and spent twelve years coordinating projects in
                logistics. But my dream was to stand in front of a classroom.
                So I earned my teaching degree, and in 2019 I made the switch.
                Math became my daily work, and I love it.
              </p>
              <p>
                What I enjoy most are those{" "}
                <span className="font-semibold whitespace-nowrap text-[#1201A4]">
                  <Bolt />
                  aha
                  <Bolt />
                </span>{" "}
                moments, when a student finally understands the logic. A calm,
                step-by-step explanation can make all the difference. I know
                where students tend to get stuck, so that’s where I start.
              </p>
              <p>
                At MarisMathics, I bring math to life with clarity and a
                healthy dose of fun. Whether you love math… or think numbers
                are confusing, you’ll find clear explanations, surprising
                insights and lightning-fast challenges.{" "}
                <span className="font-semibold whitespace-nowrap">
                  Making Math Fun.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Made by MarisMathics ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5 pt-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:px-10 md:pt-8 md:pb-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-white md:mb-7 md:text-3xl">
            Made by MarisMathics
          </h2>
          <a
            href={gameLink}
            className="group mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-[24px] bg-[radial-gradient(circle_at_30%_50%,#19E0F8_0%,#1376FD_70%)] p-5 text-center shadow-xl transition hover:-translate-y-1 sm:flex-row sm:text-left md:p-6"
          >
            <img
              src="/beat-the-lightning/app-home.jpg"
              alt="Home screen of the Beat the Lightning game"
              width={560}
              height={579}
              className="w-44 shrink-0 rounded-[18px] shadow-lg md:w-52"
            />
            <div>
              <p className="text-xs font-bold tracking-wide text-[#1201A4] uppercase">
                Free web game
              </p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                BEAT THE LIGHTNING
              </h3>
              <p className="mt-2 text-white">
                Solve each challenge before the lightning strikes
              </p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1201A4] px-6 py-2.5 font-bold text-white shadow-lg transition group-hover:scale-105">
                Play the game
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ===== Channels ===== */}
      <ChannelsBlock title="Follow MarisMathics" />

      {/* ===== Contact ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className={`${panel} px-5 py-7 text-center md:py-9`}>
          <h2 className={h2}>Get in touch</h2>
          <p className="mt-2 text-white">
            Questions, ideas or a collaboration? Send me an email
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold break-all text-[#1201A4] shadow-lg transition hover:bg-[#19E0F8]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            {contactEmail}
          </a>
        </div>
      </section>
    </main>
  );
}
