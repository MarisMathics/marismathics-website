import SocialLinks from "@/components/SocialLinks";

/**
 * Block with a title, one line and the YouTube, TikTok and Instagram buttons.
 */
export default function ChannelsBlock({
  title = "More lightning on the channels",
}: {
  title?: string;
}) {
  return (
      <section className="mx-auto mt-8 max-w-5xl px-4 md:mt-10 md:px-8">
        <div className="rounded-[30px] bg-[linear-gradient(135deg,#1376FD_0%,#1201A4_100%)] px-5 py-7 text-center shadow-[0_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 md:px-10 md:py-9">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-white/85">
              A new MarisMathics video every other day
            </p>
          </div>
          <div className="mt-5">
            <SocialLinks center />
          </div>
        </div>
      </section>
  );
}
