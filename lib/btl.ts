/**
 * Beat the Lightning: the six challenge categories.
 * Change a name here and it updates on the website.
 * (The same names are used in the game: lightning-src/game.js.)
 */

export type BtlCategory = {
  /** Part of the web address: /beat-the-lightning/<slug> */
  slug: string;
  /** Name shown to visitors */
  name: string;
  /**
   * Still from a Beat the Lightning video, shown on the card.
   * Stored in public/beat-the-lightning/cards/<slug>.jpg (540 × 960).
   */
  image: string;
  /** Short description of that still, for screen readers */
  imageAlt: string;
  /**
   * YouTube playlist ID for this category (the part after "list=" in the
   * playlist link). Leave empty until the playlist exists.
   */
  playlistId: string;
};

export const btlCategories: BtlCategory[] = [
  { slug: "classics", name: "Classics", image: "/beat-the-lightning/cards/classics.jpg", imageAlt: "Beat the Lightning #143: 12² ÷ 6 × 2", playlistId: "" },
  { slug: "solve-for-x", name: "Solve for x", image: "/beat-the-lightning/cards/solve-for-x.jpg", imageAlt: "Beat the Lightning #118: 3x + 6x = 36", playlistId: "" },
  { slug: "geometry", name: "Geometry", image: "/beat-the-lightning/cards/geometry.jpg", imageAlt: "Beat the Lightning #150: equilateral triangle, find the angles", playlistId: "" },
  { slug: "which-is-bigger", name: "Which is bigger?", image: "/beat-the-lightning/cards/which-is-bigger.jpg", imageAlt: "Beat the Lightning #166: which is bigger, 2⁵ or 5²?", playlistId: "" },
  { slug: "whats-next", name: "What’s next?", image: "/beat-the-lightning/cards/whats-next.jpg", imageAlt: "Beat the Lightning #114: 1, 3, 6, ?, 15", playlistId: "" },
  { slug: "lightning-mix", name: "Lightning Mix", image: "/beat-the-lightning/cards/lightning-mix.jpg", imageAlt: "Beat the Lightning #142: which is correct, x ≥ −1?", playlistId: "" },
];

export function getBtlCategory(slug: string) {
  return btlCategories.find((c) => c.slug === slug);
}

