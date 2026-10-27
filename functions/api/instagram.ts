interface Env {
  IG_ACCESS_TOKEN: string;
  IG_BUSINESS_ID: string;
  // Optional: only return posts whose caption contains this hashtag.
  // Leave unset/empty to return every post from the account.
  IG_HASHTAG?: string;
}

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) => {
  const cache = caches.default;
  const cacheKey = new Request(request.url, request);

  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  if (!env.IG_ACCESS_TOKEN || !env.IG_BUSINESS_ID) {
    return jsonResponse({ error: "not_configured", posts: [] }, 501);
  }

  // Optional hashtag filter — empty/unset means "return all posts".
  const hashtag = (env.IG_HASHTAG || "").replace(/^#/, "").toLowerCase();

  // Fetch the linked account's own media directly. The IG_BUSINESS_ID account is
  // owned by us (connected via its Facebook Page), so instagram_basic is enough —
  // no business_discovery (that is only for other people's public accounts and
  // needs a separate, approved app permission).
  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count";
  const apiUrl =
    `https://graph.facebook.com/v21.0/${env.IG_BUSINESS_ID}/media` +
    `?fields=${encodeURIComponent(fields)}&limit=50&access_token=${encodeURIComponent(env.IG_ACCESS_TOKEN)}`;

  let upstream: Response;
  try {
    upstream = await fetch(apiUrl);
  } catch {
    return jsonResponse({ error: "upstream_unreachable", posts: [] }, 502);
  }

  if (!upstream.ok) {
    return jsonResponse({ error: "upstream_error", posts: [] }, 502);
  }

  const data: any = await upstream.json();
  const allMedia: InstagramMedia[] = data?.data ?? [];

  const filtered = hashtag
    ? allMedia.filter(
        (m) => typeof m.caption === "string" && m.caption.toLowerCase().includes(`#${hashtag}`),
      )
    : allMedia;

  const posts = filtered.map((m) => ({
    id: m.id,
    caption: m.caption ?? "",
    mediaType: m.media_type,
    mediaUrl: m.media_type === "VIDEO" ? m.thumbnail_url ?? m.media_url : m.media_url,
    permalink: m.permalink,
    timestamp: m.timestamp,
    likeCount: m.like_count ?? null,
    commentsCount: m.comments_count ?? null,
  }));

  const response = jsonResponse({ posts, hashtag }, 200, {
    "cache-control": "public, max-age=900",
  });

  await cache.put(cacheKey, response.clone());
  return response;
};

function jsonResponse(body: unknown, status: number, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...extraHeaders },
  });
}
