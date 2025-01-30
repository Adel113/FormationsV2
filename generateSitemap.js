
import { writeFile } from 'fs/promises';

const pages = [
    { url: "/", priority: "1.0", freq: "daily" },
    { url: "/formation", priority: "0.8", freq: "weekly" },
    { url: "/contact", priority: "0.5", freq: "monthly" },
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
