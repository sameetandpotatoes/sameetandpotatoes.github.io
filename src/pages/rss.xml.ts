import type { APIContext } from 'astro';
import { getFeed } from '../lib/feed';

export async function GET(context: APIContext) {
  return getFeed(context);
}
