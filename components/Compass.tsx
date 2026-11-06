import Link from "next/link";

/**
 * The round compass "GO" button used on each World card.
 */
type CompassProps = {
  /** Where the button leads */
  href: string;
  /** Accessible label, e.g. "Enter BEAT THE LIGHTNING" */
  label: string;
};

export default function Compass({ href, label }: CompassProps) {
  return (
    <div className="mt-2 flex flex-col items-center">
      <Link
        href={href}
        className="group transition-all duration-300 hover:scale-110"
      >
        <img
          src="/branding/compass-enter.svg"
          alt={label}
          className="h-14 w-14 transition-all duration-300 group-hover:drop-shadow-[0_0_22px_rgba(24,224,248,0.9)]"
        />
      </Link>

      <span
        aria-hidden="true"
        className="mt-1 text-base font-bold tracking-wide text-[#1201A4]"
      >
        GO
      </span>
    </div>
  );
}
