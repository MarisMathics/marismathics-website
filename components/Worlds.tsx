"use client";

import { useEffect, useState } from "react";

const exploreImages = [
  "/worlds/explore/01.png",
  "/worlds/explore/02.png",
  "/worlds/explore/03.png",
  "/worlds/explore/04.png",
  "/worlds/explore/05.png",
];

const FIRST_IMAGE_DURATION = 5000;
const IMAGE_DURATION = 3500;

export default function Worlds() {
 const [currentImage, setCurrentImage] = useState(0);

 useEffect(() => {
  const delay =
    currentImage === 0 ? FIRST_IMAGE_DURATION : IMAGE_DURATION;

  const timeout = setTimeout(() => {
    setCurrentImage((prev) => (prev + 1) % exploreImages.length);
  }, delay);

  return () => clearTimeout(timeout);
}, [currentImage]);

  return (
    <section className="mx-auto mt-7 mb-16 max-w-7xl px-8">
      <div className="grid grid-cols-3 gap-12">

        {/* ===== BEAT THE LIGHTNING ===== */}

        <article
          className="
            w-[350px]
            rounded-[36px]
            bg-[radial-gradient(circle_at_center,#19E0F8_15%,#1376FD_100%)]
            p-6
            shadow-[0_18px_40px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
            hover:shadow-[0_0_45px_rgba(25,224,248,0.45)]
          "
        >

          {/* Titel */}

          <h2 className="text-center text-[1.7rem] leading-tight text-slate-50">
            BEAT THE
            <br />
            LIGHTNING
          </h2>

          {/* Video */}

          <div className="mt-4 px-6">
            <div className="overflow-hidden rounded-[28px] shadow-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-[28px]"
              >
                <source
                  src="/worlds/btl/btl-preview.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* GO */}

          <div className="mt-2 flex flex-col items-center">

            <button
              className="
                group
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <img
                src="/branding/compass-enter.svg"
                alt="Enter BEAT THE LIGHTNING"
                className="
                  h-14
                  w-14
                  transition-all
                  duration-300
                  group-hover:drop-shadow-[0_0_22px_rgba(24,224,248,0.9)]
                "
              />
            </button>

            <span className="mt-1 text-base font-bold tracking-wide text-[#1201A4]">
              GO
            </span>

          </div>

          {/* Tekst */}

          <p className="mt-3 text-center text-lg font-semibold text-white">
            Can you beat the lightning?⚡
          </p>

          <p className="mt-2 text-center text-[16px] leading-6 text-white/90">
            Solve each challenge
            <br />
            before the lightning strikes.
            <br />
          </p>

        </article>

        {/* ===== EXPLORE MATH ===== */}

        <article
          className="
            w-[350px]
            rounded-[36px]
            bg-[radial-gradient(circle_at_center,#1376FD_18%,#65E7F6_100%)]
            p-6
            shadow-[0_18px_40px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
            hover:shadow-[0_0_45px_rgba(25,224,248,0.45)]
          "
        >

          {/* Titel */}

          <h2 className="text-center text-[1.7rem] leading-tight text-slate-50">
            Explore
            <br />
            Math
          </h2>

          {/* Carrousel */}

<div className="mt-4 px-6">
  <div className="overflow-hidden rounded-[28px] shadow-xl">
    <img
      src={exploreImages[currentImage]}
      alt="Explore Math"
      className="w-full rounded-[28px]"
    />
  </div>
</div>

          {/* GO */}

          <div className="mt-2 flex flex-col items-center">

            <button
              className="
                group
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <img
                src="/branding/compass-enter.svg"
                alt="Enter Explore Math"
                className="
                  h-14
                  w-14
                  transition-all
                  duration-300
                  group-hover:drop-shadow-[0_0_22px_rgba(24,224,248,0.9)]
                "
              />
            </button>

            <span className="mt-1 text-base font-bold tracking-wide text-[#1201A4]">
              GO
            </span>

          </div>

           {/* Tekst */}

          <p className="mt-3 text-center text-lg font-semibold text-white">
            Ready to explore math?⚡
          </p>

          <p className="mt-2 text-center text-[16px] leading-6 text-white/90">
            Discover clear explanations
            <br />
            and moments that make you smile.
          </p>

        </article>

{/* ===== More MarisMathics ===== */}

<article
  className="
    w-[350px]
    rounded-[36px]
   bg-[linear-gradient(to_bottom,#3B4ED3_0%,#4EABF3_100%)]
    p-6
    shadow-[0_18px_40px_rgba(0,0,0,0.18)]
    transition-all
    duration-300
    hover:shadow-[0_0_45px_rgba(25,224,248,0.45)]
  "
>

  {/* Titel */}

  <h2 className="text-center text-[1.7rem] leading-tight text-slate-50">
    More
    <br />
    MarisMathics
  </h2>

  {/* Afbeelding */}

  <div className="mt-4 px-6">
    <div className="overflow-hidden rounded-[28px] shadow-xl">
      <img
        src="/worlds/more/Mariska.png"
        alt="More MarisMathics"
        className="w-full rounded-[28px]"
      />
    </div>
  </div>

    {/* GO */}

  <div className="mt-2 flex flex-col items-center">

    <button
      className="
        group
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <img
        src="/branding/compass-enter.svg"
        alt="Enter More MarisMathics"
        className="
          h-14
          w-14
          transition-all
          duration-300
          group-hover:drop-shadow-[0_0_22px_rgba(24,224,248,0.9)]
        "
      />
    </button>

    <span className="mt-1 text-base font-bold tracking-wide text-[#1201A4]">
      GO
    </span>

  </div>

{/* Tekst */}

  <p className="mt-3 text-center text-lg font-semibold text-white">
    Want more MarisMathics? ⚡
  </p>

  <p className="mt-2 text-center text-[16px] leading-6 text-white/90">
    Meet Mariska and explore
    <br />
     the world behind MarisMathics.
  </p>

</article>
      </div>
    </section>
    );
}