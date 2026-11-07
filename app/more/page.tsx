import type { Metadata } from "next";
import WorldHero from "@/components/WorldHero";
import Section, { ComingSoon } from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "More MarisMathics | MarisMathics",
  description: "Meet Mariska and explore the world behind MarisMathics.",
};

export default function MorePage() {
  return (
    <main>
      <WorldHero
        title="More MarisMathics"
        teaser="Want more MarisMathics?"
        background="bg-[linear-gradient(to_bottom,#1376fd_0%,#4EABF3_100%)]"
        aside={
          <img
            src="/worlds/more/Mariska.png"
            alt="Mariska, the math teacher behind MarisMathics"
            className="w-full rounded-[28px] shadow-xl"
          />
        }
      >
        <p>
          Math that finally makes sense, with laughs and lightning-fast
          challenges.
        </p>
      </WorldHero>

      <Section title="Hi, I’m Mariska">
        <div className="max-w-2xl space-y-4 text-lg leading-8 text-white/90">
          <p>
            I’m Mariska, the “Maris” behind MarisMathics. I’m a math teacher
            who loves turning tricky concepts into clear insights, with a few
            laughs along the way.
          </p>
          <p>
            At MarisMathics, I bring math to life with clarity and a healthy
            dose of fun.
          </p>
          <p>
            Whether you love math… or think numbers are confusing, you’ll find
            clear explanations, surprising insights, and those{" "}
            <span className="whitespace-nowrap font-semibold text-[#19E0F8]">
              ⚡aha⚡
            </span>{" "}
            moments where you finally understand the logic.
          </p>
        </div>
      </Section>

      <Section title="Follow MarisMathics">
        <p className="mb-5 max-w-2xl text-lg leading-8 text-white/90">
          Subscribe and challenge yourself. Discover math that’s fun, clear,
          and surprisingly satisfying.
        </p>
        <SocialLinks />
      </Section>

      <Section title="Get in touch">
        <ComingSoon>
          Contact details for questions and collaborations.
        </ComingSoon>
      </Section>
    </main>
  );
}
