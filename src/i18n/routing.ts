import { defineRouting } from "next-intl/routing";

export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";

export const routing = defineRouting({
  locales: ["cs", "en", "de", "ru"],
  defaultLocale: "cs",
  localePrefix: {
    mode: "always",
  },
  localeCookie: {
    name: LOCALE_COOKIE_NAME,
  },
  pathnames: {
    "/": "/",
  },
});

export type AppLocale = (typeof routing.locales)[number];
