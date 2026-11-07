import type { ReactNode } from "react";

/**
 * A Beat the Lightning "thumbnail": a real challenge from the videos,
 * with the video number and Mariska's timer, in the style of the videos.
 */

const W = "#e8fafd";
const C = "#19e0f8";

/** Italic x in the maths font */
function X() {
  return <i className="font-math">x</i>;
}

const previews: Record<string, ReactNode> = {
  // #17
  classics: <Formula>15 − 3 × 4 + 6</Formula>,

  // #118
  "solve-for-x": (
    <Formula>
      3<X /> + 6<X /> = 36
    </Formula>
  ),

  // #63 (redrawn from the video, same as in the game)
  geometry: (
    <svg viewBox="0 0 300 220" className="w-[78%]" aria-hidden="true">
      <path d="M70 30 L70 170 L250 170" fill="none" stroke={W} strokeWidth="4" strokeLinejoin="round" />
      <path d="M70 30 L250 170" stroke={C} strokeWidth="6" />
      <path d="M70 146 h24 v24" fill="none" stroke={C} strokeWidth="2.5" />
      <SvgText x={46} y={100}>3</SvgText>
      <SvgText x={160} y={198}>4</SvgText>
      <SvgText x={172} y={82} size={30}>?</SvgText>
    </svg>
  ),

  // #166
  "which-is-bigger": (
    <div className="flex flex-col items-center gap-[5cqw]">
      <Label>Which is bigger?</Label>
      <div className="flex items-center gap-[5cqw]">
        <Formula>
          2<sup>5</sup>
        </Formula>
        <span className="text-[5.5cqw] font-bold tracking-wide text-[#19e0f8]">VS</span>
        <Formula>
          5<sup>2</sup>
        </Formula>
      </div>
    </div>
  ),

  // #114
  "whats-next": (
    <div className="flex flex-col items-center gap-[5cqw]">
      <Label>What’s next?</Label>
      <Formula small>1, 3, 6, ?, 15</Formula>
    </div>
  ),

  // #142 (a "Which is correct?" challenge: only in Lightning Mix)
  "lightning-mix": (
    <div className="flex w-full flex-col items-center gap-[3cqw]">
      <Label>Which is correct?</Label>
      <Formula small>
        <X /> ≥ −1
      </Formula>
      <div className="grid w-[86%] grid-cols-[auto_1fr] items-center gap-x-2">
        <span className="text-[5cqw] font-bold text-[#19e0f8]">A</span>
        <NumberLine dir="left" />
        <span className="text-[5cqw] font-bold text-[#19e0f8]">B</span>
        <NumberLine dir="right" />
      </div>
    </div>
  ),
};

function Formula({ children, small }: { children: ReactNode; small?: boolean }) {
  return (
    <p
      className={`font-math whitespace-nowrap text-white ${
        small ? "text-[9.5cqw]" : "text-[11cqw]"
      } leading-none [&_sup]:text-[0.6em]`}
    >
      {children}
    </p>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[5.5cqw] font-semibold tracking-wide text-white uppercase">
      {children}
    </p>
  );
}

function SvgText({
  x,
  y,
  size = 26,
  children,
}: {
  x: number;
  y: number;
  size?: number;
  children: ReactNode;
}) {
  return (
    <text
      x={x}
      y={y}
      fill={W}
      fontSize={size}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontFamily: "var(--font-libre-baskerville), Georgia, serif" }}
    >
      {children}
    </text>
  );
}

function NumberLine({ dir }: { dir: "left" | "right" }) {
  const px = (v: number) => 110 + v * 30;
  return (
    <svg viewBox="0 0 220 64" className="w-full" aria-hidden="true">
      <path d="M10 26 H210" stroke={W} strokeWidth="2.5" />
      {[-3, -2, -1, 0, 1, 2, 3].map((v) => (
        <g key={v}>
          <path d={`M${px(v)} 18v16`} stroke={W} strokeWidth="2" />
          <text x={px(v)} y="54" fill={W} fontSize="14" textAnchor="middle">
            {v}
          </text>
        </g>
      ))}
      {dir === "left" ? (
        <>
          <path d={`M${px(-1)} 26 H14`} stroke={C} strokeWidth="5" />
          <path d="M6 26 l14 -9 v18z" fill={C} />
        </>
      ) : (
        <>
          <path d={`M${px(-1)} 26 H206`} stroke={C} strokeWidth="5" />
          <path d="M214 26 l-14 -9 v18z" fill={C} />
        </>
      )}
      <circle cx={px(-1)} cy="26" r="7" fill={C} />
    </svg>
  );
}

export default function BtlThumb({ slug, nr }: { slug: string; nr: number }) {
  return (
    <div className="@container w-full">
    <div className="relative flex aspect-[4/5] w-full flex-col items-center overflow-hidden rounded-[22px] bg-[#1201A4] px-[5cqw] pt-[14cqw] pb-[5cqw] shadow-xl">
      {/* Video number, as in the videos */}
      <div className="absolute top-[5cqw] left-[5cqw] flex items-center gap-[2cqw]">
        <img src="/branding/compass-enter.svg" alt="" className="h-[10cqw] w-[10cqw]" />
        <span className="text-[5cqw] font-semibold text-[#19e0f8]">#{nr}</span>
      </div>

      <div className="flex w-full flex-1 items-center justify-center">
        {previews[slug]}
      </div>

      {/* Mariska's timer with the countdown at 3 */}
      <div className="relative w-[20cqw]">
        <img src="/beat-the-lightning/timer.png" alt="" className="block h-auto w-full" />
        <span className="absolute top-[55.8%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,#19e0f8_0%,#1376fd_100%)] bg-clip-text text-[8cqw] leading-none font-black text-transparent">
          3
        </span>
      </div>
    </div>
    </div>
  );
}
