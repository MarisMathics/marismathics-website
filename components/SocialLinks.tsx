import { socials } from "@/lib/site";
import SocialIcon from "@/components/SocialIcon";

/** Buttons linking to the MarisMathics social media channels. */
export default function SocialLinks({ center = false }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-[#1201A4] transition hover:bg-[#19E0F8]"
        >
          <SocialIcon name={s.name} className="h-[18px] w-[18px]" />
          {s.name}
          <span className="font-normal text-[#1376FD]">{s.handle}</span>
        </a>
      ))}
    </div>
  );
}
