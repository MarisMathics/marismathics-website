/**
 * Reads a public YouTube playlist through YouTube's own feed
 * (no API key needed). The feed lists the newest 15 videos.
 * The site checks for new videos every 6 hours.
 * If the feed is down, a saved copy of the playlists is shown instead.
 */

import snapshot from "./youtube-snapshot.json";

export type YtVideo = {
  id: string;
  /** Full YouTube title, e.g. "An irrational diagonal⚡BEAT THE LIGHTNING #163" */
  title: string;
  /** Part before the lightning, e.g. "An irrational diagonal" */
  caption: string;
  /** Video number, e.g. "163" (null if the title has none) */
  nr: string | null;
  /** Format named in the title, e.g. "Almost Right…" (null if none) */
  label: string | null;
  /** true for a YouTube Short (vertical), false for a regular video */
  isShort: boolean;
};

/** One spelling per format, whatever the title uses */
const FORMAT_NAMES: [RegExp, string][] = [
  [/^almost right/i, "Almost Right…"],
  [/^symbols live/i, "Symbols Live"],
  [/^math irl/i, "Math IRL"],
  [/^behind the lightning/i, "Behind the Lightning"],
  [/^think twice/i, "Think Twice…"],
  [/^marismath music/i, "MarisMath Music"],
  [/^beat the lightning/i, "BEAT THE LIGHTNING"],
];

function formatName(raw: string) {
  const clean = raw.replace(/#\d*/g, "").trim();
  if (!clean) return null;
  return FORMAT_NAMES.find(([re]) => re.test(clean))?.[1] ?? clean;
}

/**
 * Splits a title into caption and format. Handles both styles:
 * "Power to a Power⚡MarisMath Music" and "One Solution? (Almost Right...)".
 */
function splitTitle(title: string) {
  if (title.includes("⚡")) {
    const [caption, ...rest] = title.split("⚡");
    return { caption: caption.trim(), label: formatName(rest.join(" ")) };
  }
  const m = title.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
  if (m) return { caption: m[1].trim(), label: formatName(m[2]) };
  return { caption: title, label: null };
}

const REVALIDATE_SECONDS = 6 * 60 * 60;

export async function getPlaylistVideos(playlistId: string): Promise<YtVideo[]> {
  if (!playlistId) return [];
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );
    if (res.ok) {
      const videos = parseFeed(await res.text());
      if (videos.length > 0) return videos;
    }
  } catch {
    // YouTube's feed is unreachable: fall through to the saved copy
  }
  return snapshotVideos(playlistId);
}

/**
 * Saved copy of the playlists (lib/youtube-snapshot.json), used when
 * YouTube's feed is down so the pages never show up empty.
 * Format per playlist: [videoId, title, isShort].
 */
function snapshotVideos(playlistId: string): YtVideo[] {
  const rows = (snapshot as unknown as Record<string, [string, string, boolean][]>)[playlistId] ?? [];
  return rows.map(([id, title, isShort]) => toVideo(id, title, isShort));
}

function toVideo(id: string, title: string, isShort: boolean): YtVideo {
  const { caption, label } = splitTitle(title);
  const nr = title.match(/#(\d+)/)?.[1] ?? null;
  return { id, title, caption: caption || title, nr, label, isShort };
}

function decode(s: string) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export function parseFeed(xml: string): YtVideo[] {
  return xml
    .split("<entry>")
    .slice(1)
    .map((entry) => {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? "";
      const title = decode(entry.match(/<title>([^<]*)<\/title>/)?.[1] ?? "").trim();
      const link = entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1] ?? "";
      return toVideo(id, title, link.includes("/shorts/"));
    })
    .filter((v) => v.id);
}

export function playlistUrl(playlistId: string) {
  return `https://www.youtube.com/playlist?list=${playlistId}`;
}
