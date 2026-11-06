/**
 * Central site settings: navigation and the three Worlds.
 * Change a name or address here and it updates everywhere.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "BEAT THE LIGHTNING", href: "/beat-the-lightning" },
  { label: "Explore Math", href: "/explore" },
  { label: "More MarisMathics", href: "/more" },
];

/** Social media channels (English track) */
export const socials = [
  { name: "YouTube", handle: "@MarisMathics", href: "https://www.youtube.com/@MarisMathics" },
  { name: "TikTok", handle: "@marismathics", href: "https://www.tiktok.com/@marismathics" },
  { name: "Instagram", handle: "@marismathics", href: "https://www.instagram.com/marismathics" },
];

export const worldLinks = {
  btl: "/beat-the-lightning",
  explore: "/explore",
  more: "/more",
} as const;
