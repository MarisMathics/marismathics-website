import Link from "next/link";
import type { BtlCategory } from "@/lib/btl";

/**
 * One challenge category on the Beat the Lightning page:
 * a still from a video with the category name below.
 * The whole card is a link.
 */
export default function BtlCategoryCard({ category }: { category: BtlCategory }) {
  return (
    <Link
      href={`/beat-the-lightning/${category.slug}`}
      className="group mx-auto flex w-full max-w-[260px] flex-col rounded-[20px] outline-none focus-visible:ring-4 focus-visible:ring-[#19E0F8]"
    >
      <img
        src={category.image}
        alt={category.imageAlt}
        width={540}
        height={960}
        loading="lazy"
        className="aspect-[9/16] w-full rounded-[20px] object-cover ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_36px_rgba(25,224,248,0.55)] group-hover:ring-2 group-hover:ring-[#19E0F8]"
      />
      <h3 className="mt-3 text-center text-[15px] leading-tight font-semibold text-white transition-colors group-hover:text-[#19E0F8] md:text-lg">
        {category.name}
      </h3>
    </Link>
  );
}
