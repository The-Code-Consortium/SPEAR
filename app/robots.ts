import type { MetadataRoute } from "next";

// Required for Next.js static export (output: 'export')
export const dynamic = "force-static";

import { SITE_URL } from "@/lib/constants";

/**
 * Next.js 15 built-in robots.txt generation.
 * Generates /robots.txt at build time — allows full crawling.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
