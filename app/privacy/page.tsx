import type { Metadata } from "next";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy | MarisMathics",
  description: "How MarisMathics handles your privacy: no tracking, no ads, no accounts.",
};

const h2 = "mt-10 text-xl font-bold text-[#19E0F8] md:text-2xl";
const link = "font-semibold text-[#19E0F8] underline-offset-4 hover:underline";

export default function PrivacyPage() {
  return (
    <main className="pb-20">
      <article className="mx-auto max-w-3xl px-5 pt-8 text-white md:px-8 md:pt-12">
        <h1 className="text-[2.2rem] leading-tight font-bold text-[#19E0F8] md:text-5xl">
          Privacy
        </h1>
        <p className="mt-4 text-lg leading-8 text-white/90">
          MarisMathics is made by Mariska, a math teacher in Belgium. This site
          is built to be used without giving away anything about yourself. In
          short: no tracking, no ads, no accounts.
        </p>

        <div className="space-y-4 text-base leading-7 text-white/90 md:text-lg md:leading-8">
          <h2 className={h2}>No tracking cookies</h2>
          <p>
            This website does not use cookies for statistics, advertising or
            tracking. There is no analytics tool and no social media pixel.
            That is why you don’t see a cookie banner.
          </p>

          <h2 className={h2}>The Beat the Lightning game</h2>
          <p>
            The game remembers a few things in your own browser (local
            storage), such as your settings and whether you already played
            today’s Daily lightning. This information stays on your device and
            is never sent to MarisMathics or anyone else. You can delete it at
            any time by clearing your browser data for this site.
          </p>

          <h2 className={h2}>YouTube videos</h2>
          <p>
            The videos on this site are hosted by YouTube. Before you press
            play, you only see a preview image, loaded from YouTube’s image
            server. A video only starts loading when you press play, using
            YouTube’s privacy-enhanced mode. From that moment,{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              YouTube’s privacy policy
            </a>{" "}
            applies.
          </p>

          <h2 className={h2}>Hosting</h2>
          <p>
            This website is hosted by Vercel. Like every web server, it
            processes technical data such as your IP address to deliver the
            pages to your browser and to keep the site secure.
          </p>

          <h2 className={h2}>Email</h2>
          <p>
            If you send an email to{" "}
            <a href={`mailto:${contactEmail}`} className={link}>
              {contactEmail}
            </a>
            , your message and email address are only used to reply to you.
            They are never shared or used for marketing.
          </p>

          <h2 className={h2}>Your rights</h2>
          <p>
            You can always ask what information MarisMathics has about you, or
            ask to have it deleted. Just send an email to the address above.
            If you have a complaint, you can contact the Belgian{" "}
            <a
              href="https://www.dataprotectionauthority.be"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              Data Protection Authority
            </a>
            .
          </p>

          <p className="pt-6 text-sm text-white/60">Last updated: November 2026</p>
        </div>
      </article>
    </main>
  );
}
