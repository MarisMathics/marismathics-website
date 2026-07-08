export default function Worlds() {
  return (
     <section className="mx-auto mt-4 mb-16 max-w-7xl px-8">
      <div className="grid grid-cols-3 gap-12">

        {/* ===== BEAT THE LIGHTNING ===== */}

        <article
          className="
            w-[390px]
            rounded-[36px]
            bg-[radial-gradient(circle_at_center,#19E0F8_15%,#1376FD_100%)]
            p-7
            shadow-[0_18px_40px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
            hover:shadow-[0_0_45px_rgba(25,224,248,0.45)]
          "
        >

          {/* Titel */}

          <h2 className="text-center text-[2.5rem] font-semibold leading-tight text-white">
            BEAT THE
            <br />
            LIGHTNING
          </h2>

          {/* Video */}

          <div className="mt-6 px-4">
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

          {/* Tekst */}

          <p className="mt-6 text-center text-lg font-semibold text-white">
            Can you beat the lightning? ⚡
          </p>

          <p className="mt-2 text-center text-[16px] leading-7 text-white/90">
            Solve each challenge
            <br />
            before the lightning strikes
            <br />
            and sharpen your math skills.
          </p>

          {/* GO */}

          <div className="mt-6 flex flex-col items-center">

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
                  h-20
                  w-20
                  transition-all
                  duration-300
                  group-hover:drop-shadow-[0_0_22px_rgba(24,224,248,0.9)]
                "
              />
            </button>

            <span className="mt-2 text-lg font-bold tracking-wide text-[#1201A4]">
              GO!
            </span>

          </div>

        </article>

      </div>
    </section>
  );
}