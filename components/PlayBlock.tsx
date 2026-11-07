import { gameLink } from "@/lib/site";

/**
 * The bright "Play the game" block: question, button and (on larger
 * screens) the game's home screen. Used on all Beat the Lightning pages.
 */
export default function PlayBlock() {
  return (
    <div className="flex items-center gap-8 rounded-[30px] bg-[radial-gradient(circle_at_30%_50%,#19E0F8_0%,#1376FD_70%)] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.25)] md:px-10 md:py-7">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Can you beat the lightning?
        </h2>
        <a
          href={gameLink}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1201A4] px-8 py-3.5 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-[0_0_30px_rgba(18,1,164,0.55)]"
        >
          Play the game
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 4l6 6-6 6" />
          </svg>
        </a>
      </div>
      <a
        href={gameLink}
        tabIndex={-1}
        className="hidden w-64 shrink-0 overflow-hidden rounded-[22px] shadow-xl transition hover:scale-[1.03] md:block"
      >
        <img
          src="/beat-the-lightning/app-home.jpg"
          alt="Home screen of the Beat the Lightning game: Daily lightning and Your lightning"
          width={560}
          height={579}
          className="block w-full"
        />
      </a>
    </div>
  );
}
