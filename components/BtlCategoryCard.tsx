import Link from "next/link";
import BtlThumb from "@/components/BtlThumb";
import type { BtlCategory } from "@/lib/btl";

/**
 * One challenge category on the Beat the Lightning page.
 * The whole card is a link.
 */
export default function BtlCategoryCard({ category }: { category: BtlCategory }) {
  return (
    <Link
      href={`/beat-the-lightning/${category.slug}`}
      className="group mx-auto flex w-full max-w-[280px] flex-col rounded-[26px] bg-[radial-gradient(circle_at_center,#19E0F8_15%,#1376FD_100%)] p-3 md:p-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition-all duration-300 outline-none hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(25,224,248,0.5)] focus-visible:ring-4 focus-visible:ring-[#19E0F8]"
    >
      <BtlThumb slug={category.slug} nr={category.previewNr} />

      <h2 className="mt-3 px-1 text-center text-[15px] leading-tight font-semibold text-white md:text-lg">
        {category.name}
      </h2>
    </Link>
  );
}
