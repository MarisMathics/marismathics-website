"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-30 mx-auto w-full max-w-7xl px-5 py-4 lg:px-10">
      {/* ===== Desktop ===== */}
      <div className="hidden items-center justify-between lg:flex">
        <div className="w-10" />

        <div className="flex gap-10 text-base font-semibold">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative transition hover:text-cyan-300 ${
                  item.label === item.label.toUpperCase() ? "tracking-wide" : ""
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-[60%] -translate-x-1/2 rounded-full bg-[#19E0F8]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="h-11 w-11" />
      </div>

      {/* ===== Mobile / tablet ===== */}
      <div className="flex items-center justify-end lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/40 transition hover:border-cyan-300"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-4 top-[4.25rem] rounded-3xl border border-cyan-300/30 bg-[#1201A4]/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-2xl px-5 py-3.5 text-lg font-semibold transition hover:bg-white/10 ${
                      active ? "text-[#19E0F8]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
