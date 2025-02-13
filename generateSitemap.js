
import { writeFile } from 'fs/promises';

const pages = [
    { url: "/", priority: "1.0", freq: "daily" },
    { url: "/formation", priority: "0.8", freq: "weekly" },
    { url: "/contact", priority: "0.5", freq: "monthly" },
    { url: "/mentions-legales", priority: "0.3", freq: "yearly" },
    { url: "/faq", priority: "0.2", freq: "monthly" },
    { url: "/blog", priority: "0.1", freq: "weekly" },
    { url: "/blog/:slug", priority: "0.1", freq: "monthly" },
    { url: "/tiktokformation", priority: "0.8", freq: "weekly" },
    { url: "/LienIa", priority: "0.8", freq: "weekly" },
    { url: "/apropos", priority: "0.8", freq: "weekly" },
  ];
  
  const baseUrl = "https://formationv2pro.netlify.app";
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
    <url>
        <loc>${baseUrl + page.url}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>${page.freq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`
  )
  .join("\n")}
</urlset>`;

async function generateSitemap() {
  try {
    await writeFile("public/sitemap.xml", sitemap);
    console.log("✅ Sitemap généré avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de la génération du sitemap :", error);
  }
}

generateSitemap();
