/**
 * Reads a public YouTube playlist through YouTube's own feed
 * (no API key needed). The feed lists the newest 15 videos.
 * The site checks for new videos every 6 hours.
 */

export type YtVideo = {
  id: string;
  /** Full YouTube title, e.g. "An irrational diagonal⚡BEAT THE LIGHTNING #163" */
  title: string;
  /** Part before the lightning, e.g. "An irrational diagonal" */
  caption: string;
  /** Video number, e.g. "163" (null if the title has none) */
  nr: string | null;
};

const REVALIDATE_SECONDS = 6 * 60 * 60;

export async function getPlaylistVideos(playlistId: string): Promise<YtVideo[]> {
  if (!playlistId) return [];
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`,
      { next: { revalidate: REVALIDATE_SECONDS } },
    );
    if (!res.ok) return [];
    return parseFeed(await res.text());
  } catch {
    return [];
  }
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
      const caption = title.split("⚡")[0].trim() || title;
      const nr = title.match(/#(\d+)/)?.[1] ?? null;
      return { id, title, caption, nr };
    })
    .filter((v) => v.id);
}

export function playlistUrl(playlistId: string) {
  return `https://www.youtube.com/playlist?list=${playlistId}`;
}
