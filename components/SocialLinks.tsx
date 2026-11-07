import { socials } from "@/lib/site";
import SocialIcon from "@/components/SocialIcon";

/** Buttons linking to the MarisMathics social media channels. */
export default function SocialLinks({
  center = false,
  dark = false,
}: {
  center?: boolean;
  /** Dark-blue buttons, for use on a light background */
  dark?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold transition ${
            dark
              ? "bg-[#1201A4] text-white hover:bg-[#1376FD]"
              : "bg-white text-[#1201A4] hover:bg-[#19E0F8]"
          }`}
        >
          <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
          {s.name}
          <span className={`font-normal ${dark ? "text-[#19E0F8]" : "text-[#1376FD]"}`}>{s.handle}</span>
        </a>
      ))}
    </div>
  );
}
