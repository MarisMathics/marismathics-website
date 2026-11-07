import WorldCard from "@/components/WorldCard";
import ExploreCarousel from "@/components/ExploreCarousel";
import { worldLinks } from "@/lib/site";

/**
 * The three MarisMathics Worlds on the homepage.
 */
export default function Worlds() {
  return (
    <section className="mx-auto mt-7 mb-16 max-w-7xl px-8 md:px-5 lg:px-6 xl:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-12">
        {/* ===== BEAT THE LIGHTNING ===== */}
        <WorldCard
          title={
            <>
              BEAT THE
              <br />
              LIGHTNING
            </>
          }
          background="bg-[#19E0F8]"
          light
          preview={
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-[28px]"
            >
              <source src="/worlds/btl/btl-preview.mp4" type="video/mp4" />
            </video>
          }
          href={worldLinks.btl}
          cta="Can you beat the lightning?"
          description={
            <>
              Solve each challenge
              <br />
              before the lightning strikes.
            </>
          }
        />

        {/* ===== EXPLORE MATH ===== */}
        <WorldCard
          title={
            <>
              Explore
              <br />
              Math
            </>
          }
          background="bg-[#1376FD]"
          preview={<ExploreCarousel />}
          href={worldLinks.explore}
          cta="Ready to explore math?"
          description={
            <>
              Discover clear explanations
              <br />
              and moments that make you smile.
            </>
          }
        />

        {/* ===== MORE MARISMATHICS ===== */}
        <WorldCard
          title={
            <>
              More
              <br />
              MarisMathics
            </>
          }
          background="bg-[#0A2DB0]"
          preview={
            <img
              src="/worlds/more/Mariska.png"
              alt="More MarisMathics"
              className="w-full rounded-[28px]"
            />
          }
          href={worldLinks.more}
          cta="Want more MarisMathics?"
          description={
            <>
              Meet Mariska and explore
              <br />
              the world behind MarisMathics.
            </>
          }
        />
      </div>
    </section>
  );
}
