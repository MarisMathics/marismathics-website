import type { Metadata } from "next";
import SocialLinks from "@/components/SocialLinks";
import { contactEmail, gameLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "More MarisMathics | MarisMathics",
  description:
    "Meet Mariska, the math teacher behind MarisMathics, and discover what she makes.",
};

const panel =
  "rounded-[24px] bg-[#1E2FE0]";
const h2 =
  "text-2xl font-bold text-white md:text-3xl";

/** Small lightning bolt in the brand colors (instead of the yellow emoji) */
function Bolt() {
  return (
    <svg
      viewBox="0 0 12 20"
      className="mx-0.5 inline-block h-[1em] w-[0.6em] -translate-y-px align-middle"
      aria-hidden="true"
    >
      <path d="M8 0 0 11.5h4.5L3 20l9-12H7.2L8 0z" fill="#19E0F8" />
    </svg>
  );
}

export default function MorePage() {
  return (
    <main className="pb-20">
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
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div
          className={`${panel} flex flex-col items-center gap-6 p-6 md:flex-row md:items-start md:gap-10 md:p-10`}
        >
          <div className="flex shrink-0 flex-col items-center">
            <img
              src="/worlds/more/mariska-portrait.jpg"
              alt="Mariska, the math teacher behind MarisMathics"
              width={720}
              height={720}
              className="w-48 rounded-full ring-4 ring-white/70 md:w-64"
            />
            {/* Slogan under the photo on larger screens */}
            <p className="mt-6 hidden text-center text-2xl font-bold text-[#19E0F8] italic md:block">
              Making Math Fun
            </p>
          </div>
          <div className="md:text-left">
            <h2 className={`${h2} text-center`}>Hi, I’m Mariska</h2>
            <div className="mt-4 space-y-4 text-lg leading-8 text-white">
              <p>
                I’m the “Maris” behind MarisMathics: a math teacher in secondary
                school in Belgium who loves turning tricky concepts into clear
                insights, with a few laughs along the way.
              </p>
              <p>
                I didn’t start out as a teacher. I studied business engineering
                and spent twelve years managing projects in logistics. But my
                dream was to stand in front of a classroom. So I earned my
                teaching degree, and in 2019 I made the switch. Teaching math
                became my daily work, and I love it.
              </p>
              <p>
                What I enjoy most are those{" "}
                <span className="font-semibold whitespace-nowrap text-[#19E0F8]">
                  <Bolt />
                  aha
                  <Bolt />
                </span>{" "}
                moments, when a student finally understands the logic. A calm,
                step-by-step explanation can make all the difference. I know
                where students tend to get stuck, so that’s where I start.
              </p>
              <p>
                At MarisMathics, I bring math to life with clarity and a healthy
                dose of fun. Whether you love math… or think numbers are
                confusing, you’ll find clear explanations, surprising insights
                and lightning-fast challenges.
              </p>
            </div>
            {/* On phones: slogan at the end of the story */}
            <p className="mt-6 text-center text-xl font-bold text-[#19E0F8] italic md:hidden">
              Making Math Fun
            </p>
          </div>
        </div>
      </section>

      {/* ===== Made by MarisMathics ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[24px] bg-[#1376FD] p-5 pt-6 md:px-10 md:pt-8 md:pb-10">
          <h2 className="mb-5 text-center text-2xl font-bold text-white md:mb-7 md:text-3xl">
            Made by MarisMathics
          </h2>
          <a
            href={gameLink}
            className="group mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-[20px] bg-[#19E0F8] p-5 text-center transition hover:-translate-y-1 sm:flex-row sm:text-left md:p-6"
          >
            <img
              src="/beat-the-lightning/app-home.jpg"
              alt="Home screen of the Beat the Lightning game"
              width={560}
              height={579}
              className="w-44 shrink-0 rounded-[18px] md:w-52"
            />
            <div>
              <p className="text-xs font-bold tracking-wide text-[#1201A4] uppercase">
                Free web game
              </p>
              <h3 className="mt-1 text-2xl font-bold text-[#1201A4]">
                BEAT THE LIGHTNING
              </h3>
              <p className="mt-2 text-[#1201A4]">
                Solve each challenge before the lightning strikes
              </p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1201A4] px-6 py-2.5 font-bold text-white transition group-hover:scale-105">
                Play the game
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
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
            </div>
          </a>
        </div>
      </section>

      {/* ===== Stay in touch: channels + email ===== */}
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[24px] bg-[#1E2FE0] px-5 py-7 text-center md:px-10 md:py-9">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Stay in touch
          </h2>
          <p className="mt-2 text-white/90">
            A new MarisMathics video every other day
          </p>
          <div className="mt-5">
            <SocialLinks center />
          </div>

          <div className="mx-auto my-7 h-px max-w-md bg-white/20" />

          <p className="text-white/90">
            Questions, ideas or a collaboration? Send me an email
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold break-all text-[#1201A4] transition hover:bg-[#19E0F8]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
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
