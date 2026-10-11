import type { APIContext } from 'astro';
import { getFeed } from '../../lib/feed';

// Legacy Hugo section feed URL — serves the same feed as /rss.xml.
export async function GET(context: APIContext) {
  return getFeed(context);
}
