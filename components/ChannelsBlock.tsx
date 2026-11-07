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
        <div className="rounded-[24px] bg-[#E8FAFD] px-5 py-7 text-center md:px-10 md:py-9">
          <div>
            <h2 className="text-2xl font-bold text-[#1201A4] md:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-[#1201A4]/80">
              A new MarisMathics video every other day
            </p>
          </div>
          <div className="mt-5">
            <SocialLinks center dark />
          </div>
        </div>
      </section>
  );
}
