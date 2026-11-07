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
  /** Video number of the challenge shown on the card */
  previewNr: number;
  /**
   * YouTube playlist ID for this category (the part after "list=" in the
   * playlist link). Leave empty until the playlist exists.
   */
  playlistId: string;
};

export const btlCategories: BtlCategory[] = [
  { slug: "classics", name: "Classics", previewNr: 17, playlistId: "" },
  { slug: "solve-for-x", name: "Solve for x", previewNr: 118, playlistId: "" },
  { slug: "geometry", name: "Geometry", previewNr: 63, playlistId: "" },
  { slug: "which-is-bigger", name: "Which is bigger?", previewNr: 166, playlistId: "" },
  { slug: "whats-next", name: "What’s next?", previewNr: 114, playlistId: "" },
  { slug: "lightning-mix", name: "Lightning Mix", previewNr: 142, playlistId: "" },
];

export function getBtlCategory(slug: string) {
  return btlCategories.find((c) => c.slug === slug);
}

