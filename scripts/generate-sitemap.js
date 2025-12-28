import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://bactermfinder.netlify.app';

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content };
  
  const frontmatter = match[1];
  const body = match[2];
  
  const data = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
      }
      data[key.trim()] = value;
    }
  });
  
  return { data, content: body };
}

function formatDate(dateStr) {
  return dateStr;
}

function generateSitemap() {
  const postsDir = path.join(__dirname, '../src/blog/posts');
  const publicDir = path.join(__dirname, '../public');
  
  const urls = [
    { loc: BASE_URL, lastmod: new Date().toISOString().split('T')[0] },
    { loc: `${BASE_URL}/blog`, lastmod: new Date().toISOString().split('T')[0] },
  ];
  
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  
  files.forEach(file => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = parseFrontmatter(content);
    const slug = file.replace('.md', '');
    const date = data.date ? formatDate(data.date) : new Date().toISOString().split('T')[0];
    
    urls.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: date,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>${url.changefreq ? `
    <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority ? `
    <priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✓ Sitemap generated at public/sitemap.xml');
  console.log(`  - ${urls.length} URLs included`);
}

generateSitemap();
