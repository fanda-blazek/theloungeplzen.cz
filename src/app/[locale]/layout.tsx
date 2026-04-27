import "@/styles/globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Montserrat, Playfair_Display } from "next/font/google";
import { hasLocale, type Locale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { app } from "@/config/app";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const fontSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#10111d" },
    { media: "(prefers-color-scheme: light)", color: "#10111d" },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LocaleLayoutProps, "children">
): Promise<Metadata> {
  const { locale } = await props.params;
  const currentLocale = locale as Locale;

  const t = await getTranslations({
    locale: currentLocale,
    namespace: "layout.metadata",
  });

  return {
    title: {
      default: t("title"),
      template: `%s | ${app.site.name}`,
    },
    description: t("description"),
    metadataBase: new URL(app.site.url),
    authors: app.metadata.authors,
    alternates: {
      canonical: getPathname({ href: "/", locale: currentLocale }),
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getPathname({ href: "/", locale: cur })])
      ),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getPathname({ href: "/", locale: currentLocale }),
      siteName: app.site.name,
      locale: currentLocale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1280,
          height: 853,
          alt: t("title"),
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`scroll-pt-20 ${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="relative isolate min-h-dvh">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
