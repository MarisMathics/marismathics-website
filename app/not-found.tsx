import Link from "next/link";

/** Shown when a page does not exist (404), in the MarisMathics style. */
export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-6xl font-bold text-[#19E0F8] md:text-7xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
        This page doesn’t exist
      </h1>
      <p className="mt-3 text-lg text-white/85">
        Even the lightning couldn’t find it
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#19E0F8] px-7 py-3 font-bold text-[#1201A4] transition hover:scale-105"
      >
        Back to the homepage
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 4l6 6-6 6" />
        </svg>
      </Link>
    </main>
  );
}
