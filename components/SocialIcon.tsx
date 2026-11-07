import { siInstagram, siTiktok, siYoutube } from "simple-icons";

/**
 * Official platform icon (from Simple Icons), drawn in the current text colour.
 */
const icons: Record<string, { path: string }> = {
  YouTube: siYoutube,
  TikTok: siTiktok,
  Instagram: siInstagram,
};

export default function SocialIcon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
