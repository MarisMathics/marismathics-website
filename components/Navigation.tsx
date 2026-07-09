export default function Navigation() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">

      <div className="w-10" />

      <div className="flex gap-10 text-base font-semibold">

        {/* Actieve pagina */}

        <a
          href="#"
          className="relative transition hover:text-cyan-300"
        >
          Home

          <span
            className="
              absolute
              left-1/2
              -bottom-1
              h-[2px]
              w-[60%]
              -translate-x-1/2
              rounded-full
              bg-[#19E0F8]
            "
          />
        </a>

        <a
          href="#"
          className="tracking-wide transition hover:text-cyan-300"
        >
          BEAT THE LIGHTNING
        </a>

        <a
          href="#"
          className="transition hover:text-cyan-300"
        >
          Explore Math
        </a>

        <a
          href="#"
          className="transition hover:text-cyan-300"
        >
          More MarisMathics
        </a>

      </div>

      <button className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 transition hover:border-cyan-300">
        🔍
      </button>

    </nav>
  );
}