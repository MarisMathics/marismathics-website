import type { Metadata } from "next";
import WorldHero from "@/components/WorldHero";
import Section, { ComingSoon } from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Beat The Lightning | MarisMathics",
  description:
    "Short, fast-paced math challenges. Can you solve them before the lightning strikes?",
};

const steps = [
  { n: "1", title: "See the challenge", text: "A short math problem appears on screen." },
  { n: "2", title: "Race the countdown", text: "Solve it in your head before the lightning strikes." },
  { n: "3", title: "Check the reveal", text: "The answer appears. Did you beat the lightning?" },
];

const categories = [
  "Which is bigger?",
  "What’s next?",
  "Mental math",
  "Powers and roots",
  "Order of operations",
  "Mathematical reasoning",
];

export default function BeatTheLightningPage() {
  return (
    <main>
      <WorldHero
        title="BEAT THE LIGHTNING"
        teaser="Can you beat the lightning? ⚡"
        background="bg-[radial-gradient(circle_at_30%_40%,#19E0F8_0%,#1376FD_75%)]"
        aside={
          <div className="overflow-hidden rounded-[28px] shadow-xl">
            <video autoPlay muted loop playsInline className="w-full">
              <source src="/worlds/btl/btl-preview.mp4" type="video/mp4" />
            </video>
          </div>
        }
      >
        <p>
          Short, fast-paced math challenges. One problem, one countdown, and
          just a few seconds to find the answer before the lightning strikes.
        </p>
      </WorldHero>

      <Section title="How it works">
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-3xl bg-white/10 p-6">
              <span className="font-math text-4xl text-[#19E0F8]">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-white/85">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Challenge types">
        <ul className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-cyan-300/50 px-4 py-2 font-semibold text-white"
            >
              {c}
            </li>
          ))}
        </ul>
        <ComingSoon>
          Play Beat The Lightning challenges right here on the website, with a
          timer and answer reveal.
        </ComingSoon>
      </Section>

      <Section title="New challenges every day">
        <p className="mb-5 max-w-2xl leading-7 text-white/90">
          Until then, you can find new Beat The Lightning challenges on the
          MarisMathics channels.
        </p>
        <SocialLinks />
      </Section>
    </main>
  );
}
