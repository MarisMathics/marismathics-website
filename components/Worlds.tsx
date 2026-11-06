import WorldCard from "@/components/WorldCard";
import ExploreCarousel from "@/components/ExploreCarousel";

/**
 * The three MarisMathics Worlds on the homepage.
 */
export default function Worlds() {
  return (
    <section className="mx-auto mt-7 mb-16 max-w-7xl px-8">
      <div className="grid grid-cols-3 gap-12">
        {/* ===== BEAT THE LIGHTNING ===== */}
        <WorldCard
          title={
            <>
              BEAT THE
              <br />
              LIGHTNING
            </>
          }
          background="bg-[radial-gradient(circle_at_center,#19E0F8_15%,#1376FD_100%)]"
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
          goLabel="Enter BEAT THE LIGHTNING"
          teaser="Can you beat the lightning?⚡"
          description={
            <>
              Solve each challenge
              <br />
              before the lightning strikes.
              <br />
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
          background="bg-[radial-gradient(circle_at_center,#1376FD_18%,#65E7F6_100%)]"
          preview={<ExploreCarousel />}
          goLabel="Enter Explore Math"
          teaser="Ready to explore math?⚡"
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
          background="bg-[linear-gradient(to_bottom,#1376fd_0%,#4EABF3_100%)]"
          preview={
            <img
              src="/worlds/more/Mariska.png"
              alt="More MarisMathics"
              className="w-full rounded-[28px]"
            />
          }
          goLabel="Enter More MarisMathics"
          teaser="Want more MarisMathics? ⚡"
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
