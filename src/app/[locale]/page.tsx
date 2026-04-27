import Image from "next/image";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Hero,
  HeroActions,
  HeroBackground,
  HeroContent,
  HeroDescription,
  HeroTitle,
} from "@/components/ui/hero";
import { PatternGrid } from "@/components/ui/patterns";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { app } from "@/config/app";
import OgImage from "@/assets/images/og-image.jpg";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  setRequestLocale(locale as Locale);

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "pages.home",
  });

  const highlights = [
    {
      title: t("highlights.atmosphere.title"),
      description: t("highlights.atmosphere.description"),
      icon: SparklesIcon,
    },
    {
      title: t("highlights.location.title"),
      description: t("highlights.location.description"),
      icon: MapPinIcon,
    },
    {
      title: t("highlights.events.title"),
      description: t("highlights.events.description"),
      icon: CalendarDaysIcon,
    },
  ];

  return (
    <main className="relative min-h-dvh overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-20">
        <Container className="flex h-20 items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-md text-sm">
              TL
            </span>
            <span>{app.site.name}</span>
          </a>
          <LocaleSwitcher />
        </Container>
      </header>

      <Hero id="top" className="from-muted/50 bg-linear-0">
        <HeroBackground>
          <PatternGrid className="absolute inset-0 -z-10 size-full" />
        </HeroBackground>
        <HeroContent className="grid min-h-[calc(100svh-4rem)] items-center gap-12 pt-32 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1fr)]">
          <div>
            <p className="text-primary text-sm font-medium uppercase">{t("hero.eyebrow")}</p>
            <HeroTitle className="mx-0 mt-5 max-w-4xl text-left">
              {t.rich("hero.title", {
                break: () => <br />,
              })}
            </HeroTitle>
            <HeroDescription className="mx-0 max-w-2xl text-left">
              {t("hero.description")}
            </HeroDescription>
            <HeroActions className="sm:justify-start">
              <Button size="lg" nativeButton={false} render={<a href="#reservation" />}>
                {t("hero.primaryAction")}
                <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                nativeButton={false}
                render={<a href="#experience" />}
              >
                {t("hero.secondaryAction")}
              </Button>
            </HeroActions>
          </div>

          <div className="border-border/70 bg-card/80 shadow-primary/10 overflow-hidden rounded-2xl border shadow-2xl backdrop-blur">
            <Image
              src={OgImage}
              alt={t("hero.imageAlt")}
              className="aspect-[4/3] size-full object-cover"
              priority
            />
          </div>
        </HeroContent>
      </Hero>

      <Container id="experience" render={<section />} className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <p className="text-primary text-sm font-medium uppercase">{t("experience.eyebrow")}</p>
            <h2 className="font-heading mt-4 text-3xl font-semibold text-pretty sm:text-4xl lg:text-5xl">
              {t("experience.title")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-border/80 bg-card flex min-h-56 flex-col justify-between rounded-lg border p-5"
                >
                  <Icon aria-hidden="true" className="text-primary" />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-6">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>

      <Container id="reservation" render={<section />} className="pb-20 sm:pb-28">
        <div className="bg-primary text-primary-foreground grid gap-8 rounded-2xl p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-pretty">
              {t("reservation.title")}
            </h2>
            <p className="text-primary-foreground/80 mt-3 max-w-2xl">
              {t("reservation.description")}
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            nativeButton={false}
            render={<a href={t("reservation.href")} />}
          >
            {t("reservation.action")}
          </Button>
        </div>
      </Container>
    </main>
  );
}
