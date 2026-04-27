import { MetadataRoute } from "next";
import { app } from "@/config/app";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

function getAbsoluteUrl(locale: AppLocale) {
  return `${app.site.url}${getPathname({ href: "/", locale })}`;
}

function createAlternates() {
  return {
    languages: Object.fromEntries(
      routing.locales.map((locale) => [locale, getAbsoluteUrl(locale)])
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return routing.locales.map((locale) => ({
    url: getAbsoluteUrl(locale),
    lastModified: currentDate,
    alternates: createAlternates(),
  }));
}
