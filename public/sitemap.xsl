<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:template match="/">
        <html>
            <head>
                <title>Plan du site - Sitemap</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; background: #f8f9fa; color: #333; }
                    h2 { color: #007bff; }
                    table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0px 4px 8px rgba(0,0,0,0.1); }
                    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                    th { background-color: #007bff; color: white; }
                    tr:nth-child(even) { background-color: #f2f2f2; }
                    a { color: #007bff; text-decoration: none; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h2>📌 Plan du site</h2>
                <table>
                    <tr>
                        <th>URL</th>
                        <th>Dernière modification</th>
                        <th>Fréquence</th>
                        <th>Priorité</th>
                    </tr>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                        <tr>
                            <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                            <td><xsl:value-of select="sitemap:lastmod"/></td>
                            <td><xsl:value-of select="sitemap:changefreq"/></td>
                            <td><xsl:value-of select="sitemap:priority"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
