export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6">

      <div className="flex flex-col items-center">

        <div className="relative -mt-5">

          <div className="absolute inset-0 scale-125 rounded-full bg-cyan-400/20 blur-[90px]" />

          <img
            src="/branding/logo_transparant.png"
            alt="MarisMathics"
            className="relative w-[400px] max-w-full"
          />

        </div>

        <p className="-mt-2 text-[1.3rem] italic tracking-[0.03em] text-cyan-300">
  Making Math Fun
</p>

      </div>

    </section>
  );
}