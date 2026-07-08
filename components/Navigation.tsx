export default function Navigation() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">

      <div className="w-10" />

      <div className="flex gap-14 text-base font-semibold">

        <a href="#" className="transition hover:text-cyan-300">
          Home
        </a>

        <a
          href="#"
          className="tracking-wide transition hover:text-cyan-300"
        >
          BEAT THE LIGHTNING
        </a>

        <a href="#" className="transition hover:text-cyan-300">
          Explore Math
        </a>

        <a href="#" className="transition hover:text-cyan-300">
          More MarisMathics
        </a>

      </div>

      <button className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 transition hover:border-cyan-300">
        🔍
      </button>

    </nav>
  );
}