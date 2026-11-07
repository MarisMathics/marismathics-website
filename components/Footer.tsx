import Link from "next/link";
import { contactEmail, navItems, socials } from "@/lib/site";
import SocialIcon from "@/components/SocialIcon";

/**
 * Footer on every page: logo and tagline, the three Worlds, the channels
 * and the contact email.
 * (The logo links to the homepage.)
 * Navigation and channels come from lib/site.ts.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0e0186]">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 text-center md:grid-cols-[1.4fr_1fr_1fr] md:px-8 md:text-left">
        {/* Brand */}
        <div className="flex justify-center md:justify-start">
          {/* Logo with the tagline centred below it, as on the homepage */}
          <Link href="/" aria-label="MarisMathics home" className="inline-flex flex-col items-center">
            <img
              src="/branding/logo_transparant.png"
              alt="MarisMathics"
              width={900}
              height={220}
              className="w-52"
            />
            <span className="-mt-1 text-lg tracking-[0.03em] text-cyan-300 italic">
              Making Math Fun
            </span>
          </Link>
        </div>

        {/* The Worlds */}
        <nav aria-label="Footer" className="md:pt-2">
          <ul className="space-y-2.5">
            {navItems
              .filter((item) => item.href !== "/")
              .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-semibold text-white transition hover:text-[#19E0F8]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Channels */}
        <div className="md:pt-2">
          <ul className="space-y-2.5">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-semibold text-white transition hover:text-[#19E0F8]"
                >
                  <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
                  {s.name}
                  <span className="font-normal text-white/60">{s.handle}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2.5 font-semibold text-white transition hover:text-[#19E0F8]"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-5 text-sm text-white/60 sm:flex-row sm:justify-between md:px-8">
          <p>© {year} MarisMathics</p>
          <Link href="/privacy" className="transition hover:text-[#19E0F8]">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
