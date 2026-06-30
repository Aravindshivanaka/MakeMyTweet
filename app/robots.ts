import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://makemytweet.com/sitemap.xml",
    host: "https://makemytweet.com",
  };
}
