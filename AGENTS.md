# Repository guidance

## Updating the latest Substack article

The Substack publication is **Net Primary Production** at `https://netprimary.substack.com/`.
To find the latest published article, fetch its RSS feed at
`https://netprimary.substack.com/feed` and use the first `<item>`'s title, link,
description, and publication date. The feed may return HTTP 403 without a browser
User-Agent, so set one when fetching it programmatically (for example,
`Mozilla/5.0`).

When updating the homepage's latest article, update both the prominent link in
`src/app/page.tsx` and the first entry in `src/components/substack-index.tsx` so
the two stay in sync. Use the full article URL from the feed.
