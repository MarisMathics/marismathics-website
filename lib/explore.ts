/**
 * Explore Math: the maths topics.
 * Each topic reads its YouTube playlist "Explore Math · <topic>".
 * Add a topic here (with its playlist ID) and it appears on the site.
 */

export type ExploreTopic = {
  /** Part of the web address: /explore/<slug> */
  slug: string;
  name: string;
  /**
   * The video whose YouTube thumbnail is shown on the topic card.
   * isShort: false for a regular (landscape) video; its left part is shown.
   */
  cover: { videoId: string; isShort: boolean };
  /** YouTube playlist ID (the part after "list=" in the playlist link) */
  playlistId: string;
};

export const exploreTopics: ExploreTopic[] = [
  {
    slug: "fractions",
    name: "Fractions",
    cover: { videoId: "gpgPLi5UCiE", isShort: false }, // Dividing by Fractions (Behind the Lightning)
    playlistId: "PLNJLVljdj6_E",
  },
  {
    slug: "algebra",
    name: "Algebra",
    cover: { videoId: "6rplxVdETbo", isShort: true }, // When Mom Uses Your Full Name... (Math IRL)
    playlistId: "PLK5TERgLgab0",
  },
  {
    slug: "powers-and-roots",
    name: "Powers & Roots",
    cover: { videoId: "N3Lll-_XAl4", isShort: true }, // 6⁻² = ? (Almost Right…)
    playlistId: "PLSUtl_hk2rq4",
  },
  {
    slug: "geometry",
    name: "Geometry",
    cover: { videoId: "7vl-qgEoaEw", isShort: true }, // Right Triangle… Wrong Formula? (Almost Right…)
    playlistId: "PLUxqfYwHPHxE",
  },
];

export function getExploreTopic(slug: string) {
  return exploreTopics.find((t) => t.slug === slug);
}
