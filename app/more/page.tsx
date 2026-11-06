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
        teaser="Want more MarisMathics? ⚡"
        background="bg-[linear-gradient(to_bottom,#1376fd_0%,#4EABF3_100%)]"
        aside={
          <img
            src="/worlds/more/Mariska.png"
            alt="Mariska, the math teacher behind MarisMathics"
            className="w-full rounded-[28px] shadow-xl"
          />
        }
      >
        <p>Meet Mariska and explore the world behind MarisMathics.</p>
      </WorldHero>

      <Section title="Hi, I’m Mariska">
        <div className="max-w-2xl space-y-4 text-lg leading-8 text-white/90">
          <p>
            I’m a mathematics teacher in Belgium. With MarisMathics, I want to
            make math accessible, engaging and fun, without ever giving up
            mathematical accuracy.
          </p>
          <p>
            Fast challenges, clear explanations and a bit of humour: that’s
            what MarisMathics is all about.
          </p>
        </div>
      </Section>

      <Section title="Follow MarisMathics">
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
