import { ApiBlogI } from '@utils/types';
import { API_HOST } from '@utils/constants';

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
}

export const generateRSS = (blogData: ApiBlogI): string => {
  const siteUrl = 'https://nico.dev';
  const feedTitle = 'Nico Martin - Blog';
  const feedDescription = blogData.intro || 'Articles and thoughts by Nico Martin';
  
  const items: RSSItem[] = blogData.items.map(item => ({
    title: item.title,
    link: item.link,
    description: item.abstract || '',
    pubDate: new Date(item.date).toUTCString(),
    guid: item.link,
  }));

  const rssItems = items.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.guid}</guid>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${feedTitle}</title>
    <link>${siteUrl}</link>
    <description>${feedDescription}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;
};