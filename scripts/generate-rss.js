const fs = require('fs');
const path = require('path');

// Import constants
const API_HOST = 'https://wp.nico.dev';

// RSS generation function
function generateRSS(blogData) {
  const siteUrl = 'https://nico.dev';
  const feedTitle = 'Nico Martin - Blog';
  const feedDescription = blogData.intro || 'Articles and thoughts by Nico Martin';
  
  const items = blogData.items.map(item => ({
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
}

// Simple fetch function
async function apiGet(url) {
  const fetch = (await import('node-fetch')).default;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

// Blog props function
async function getBlogProps() {
  try {
    const host = API_HOST.endsWith('/') ? API_HOST : API_HOST + '/';
    const pageData = await apiGet(`${host}wp-json/nico/v1/blog`);
    return {
      props: {
        pageData,
      },
    };
  } catch (e) {
    throw new Error(`Failed to fetch blog data: ${e.message}`);
  }
}

async function generateRSSFeed() {
  try {
    console.log('Generating RSS feed...');
    
    // Get blog data
    const { props } = await getBlogProps();
    const blogData = props.pageData;
    
    // Generate RSS XML
    const rssXml = generateRSS(blogData);
    
    // Write to public directory
    const outputPath = path.join(__dirname, '../public/rss.xml');
    fs.writeFileSync(outputPath, rssXml, 'utf8');
    
    console.log(`RSS feed generated successfully at ${outputPath}`);
    console.log(`Feed contains ${blogData.items.length} items`);
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    process.exit(1);
  }
}

generateRSSFeed();