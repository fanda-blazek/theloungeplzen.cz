import "@/styles/globals.css";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { hasLocale, type Locale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { app } from "@/config/app";
import { routing } from "@/i18n/routing";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
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
    <html lang={locale} className={`scroll-pt-16 ${fontSans.variable} ${fontMono.variable}`}>
      <body className="min-h-dvh antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="relative isolate min-h-dvh">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
