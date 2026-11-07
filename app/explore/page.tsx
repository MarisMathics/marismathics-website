import type { Metadata } from "next";
import WorldHero from "@/components/WorldHero";
import Section, { ComingSoon } from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Explore Math | MarisMathics",
  description:
    "Clear explanations of mathematical concepts, with moments that make you smile.",
};

const topics = [
  { title: "Math concepts", text: "What an idea really means, explained step by step." },
  { title: "Worked examples", text: "Problems solved clearly, from start to finish." },
  { title: "Common mistakes", text: "Where it usually goes wrong, and how to avoid it." },
  { title: "Mathematical reasoning", text: "Why the rules work, not just how to use them." },
];

const gallery = [
  "/worlds/explore/01.png",
  "/worlds/explore/02.png",
  "/worlds/explore/03.png",
  "/worlds/explore/04.png",
  "/worlds/explore/05.png",
];

export default function ExplorePage() {
  return (
    <main>
      <WorldHero
        title="Explore Math"
        teaser="Ready to explore math?"
        background="bg-[radial-gradient(circle_at_30%_40%,#1376FD_10%,#65E7F6_100%)]"
      >
        <p>
          Clear explanations that show why math works, not just how. With a
          few moments along the way that will make you smile.
        </p>
      </WorldHero>

      <Section title="What you’ll find here">
        <ul className="grid gap-4 sm:grid-cols-2">
          {topics.map((t) => (
            <li key={t.title} className="rounded-3xl bg-white/10 p-6">
              <h3 className="text-lg font-semibold text-white">{t.title}</h3>
              <p className="mt-1 text-white/85">{t.text}</p>
            </li>
          ))}
        </ul>
        <ComingSoon>
          Explanations and videos, organised by topic, so you can find exactly
          what you need.
        </ComingSoon>
      </Section>

      <Section title="A taste of MarisMathics">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {gallery.map((src, i) => (
            <li key={src} className="overflow-hidden rounded-[24px] shadow-xl">
              <img
                src={src}
                alt={`MarisMathics post ${i + 1}`}
                loading="lazy"
                className="w-full"
              />
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </Section>
    </main>
  );
}
