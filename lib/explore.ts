/**
 * Explore Math: the maths topics.
 * Each topic reads its YouTube playlist "Explore Math · <topic>".
 * Add a topic here (with its playlist ID) and it appears on the site.
 */

export type ExploreTopic = {
  /** Part of the web address: /explore/<slug> */
  slug: string;
  name: string;
  /** Which symbol is drawn on the topic card (see components/ExploreTopicCard.tsx) */
  symbol: "fraction" | "algebra" | "powers" | "geometry";
  /** YouTube playlist ID (the part after "list=" in the playlist link) */
  playlistId: string;
};

export const exploreTopics: ExploreTopic[] = [
  { slug: "fractions", name: "Fractions", symbol: "fraction", playlistId: "PLNJLVljdj6_E" },
  { slug: "algebra", name: "Algebra", symbol: "algebra", playlistId: "PLK5TERgLgab0" },
  { slug: "powers-and-roots", name: "Powers & Roots", symbol: "powers", playlistId: "PLSUtl_hk2rq4" },
  { slug: "geometry", name: "Geometry", symbol: "geometry", playlistId: "PLUxqfYwHPHxE" },
];

export function getExploreTopic(slug: string) {
  return exploreTopics.find((t) => t.slug === slug);
}
