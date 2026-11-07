import Link from "next/link";
import { navItems, socials } from "@/lib/site";

/**
 * Footer on every page: logo and tagline, the Worlds, the channels.
 * Navigation and channels come from lib/site.ts.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0e0186]">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 text-center md:grid-cols-[1.4fr_1fr_1fr] md:px-8 md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" aria-label="MarisMathics home">
            <img
              src="/branding/logo_transparant.png"
              alt="MarisMathics"
              width={900}
              height={220}
              className="w-52"
            />
          </Link>
          <p className="mt-1 text-lg tracking-[0.03em] text-cyan-300 italic">
            Making Math Fun
          </p>
        </div>

        {/* The Worlds */}
        <nav aria-label="Footer">
          <h2 className="text-sm font-bold tracking-[0.15em] text-white/60 uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
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
        <div>
          <h2 className="text-sm font-bold tracking-[0.15em] text-white/60 uppercase">
            Follow
          </h2>
          <ul className="mt-4 space-y-2.5">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white transition hover:text-[#19E0F8]"
                >
                  {s.name}
                  <span className="ml-2 font-normal text-white/60">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-5xl px-5 py-5 text-center text-sm text-white/60 md:px-8 md:text-left">
          © {year} MarisMathics
        </p>
      </div>
    </footer>
  );
}
