import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

/**
 * The site's RSS feed. Served at /rss.xml, and also at the legacy Hugo
 * paths /index.xml and /posts/index.xml so existing subscribers keep working.
 */
export async function getFeed(context: APIContext) {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: 'Sameet Sapra',
    description:
      'Writing by Sameet Sapra — software engineer based in Chicago. Occasional posts on software, security, and lessons learned.',
    site: context.site ?? 'https://www.sameetsapra.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
