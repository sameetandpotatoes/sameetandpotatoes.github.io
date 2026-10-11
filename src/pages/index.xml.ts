import type { APIContext } from 'astro';
import { getFeed } from '../lib/feed';

// Legacy Hugo feed URL — serves the same feed as /rss.xml so
// subscribers who followed the old site are not broken.
export async function GET(context: APIContext) {
  return getFeed(context);
}
