import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowDownIcon,
  BanknoteIcon,
  CreditCardIcon,
  MapPinIcon,
  NavigationIcon,
  PhoneIcon,
  WifiIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconBrand } from "@/components/ui/icon-brand";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { lounge } from "@/config/app";
import { cn } from "@/lib/utils";
import HeroImage from "@/assets/images/lounge/IMG_8036.jpg";
import FoodImage from "@/assets/images/lounge/food.jpg";
import HookahImage from "@/assets/images/lounge/the-lounge-18.jpg";
import AlcoholImage from "@/assets/images/lounge/IMG_2441.jpg";
import DrinksImage from "@/assets/images/lounge/the_lounge_srpen-40.jpg";

type Offering = {
  key: string;
  title: ReactNode;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  reverse?: boolean;
  shaded?: boolean;
  action?: ReactNode;
  badges?: string[];
};

const openingHourTimes = {
  monday: "16:00 - 23:00",
  tuesday: "16:00 - 23:00",
  wednesday: "16:00 - 23:00",
  thursday: "16:00 - 23:00",
  friday: "16:00 - 01:00",
  saturday: "16:00 - 01:00",
  sunday: "14:00 - 22:00",
} as const;

const openingHourDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  setRequestLocale(currentLocale);

  const t = await getTranslations({
    locale: currentLocale,
    namespace: "pages.home",
  });

  const highlight = (chunks: ReactNode) => <span className="text-primary">{chunks}</span>;

  const features = [
    {
      label: t("about.features.wifi"),
      icon: WifiIcon,
    },
    {
      label: t("about.features.card"),
      icon: CreditCardIcon,
    },
    {
      label: t("about.features.cash"),
      icon: BanknoteIcon,
    },
  ];

  const offerings: Offering[] = [
    {
      key: "food",
      title: t.rich("offerings.food.title", { highlight }),
      description: t("offerings.food.description"),
      image: FoodImage,
      imageAlt: t("offerings.food.imageAlt"),
      action: (
        <a href="/foods.pdf" download className="lounge-link text-primary font-semibold uppercase">
          {t("offerings.food.action")}
        </a>
      ),
    },
    {
      key: "hookah",
      title: t.rich("offerings.hookah.title", { highlight }),
      description: t("offerings.hookah.description"),
      image: HookahImage,
      imageAlt: t("offerings.hookah.imageAlt"),
      reverse: true,
      shaded: true,
      badges: [t("offerings.hookah.badges.light"), t("offerings.hookah.badges.dark")],
    },
    {
      key: "alcohol",
      title: t.rich("offerings.alcohol.title", { highlight }),
      description: t("offerings.alcohol.description"),
      image: AlcoholImage,
      imageAlt: t("offerings.alcohol.imageAlt"),
      badges: [t("offerings.alcohol.badges.alcohol"), t("offerings.alcohol.badges.wine")],
    },
    {
      key: "drinks",
      title: t.rich("offerings.drinks.title", { highlight }),
      description: t("offerings.drinks.description"),
      image: DrinksImage,
      imageAlt: t("offerings.drinks.imageAlt"),
      reverse: true,
      shaded: true,
      badges: [t("offerings.drinks.badges.lemonades"), t("offerings.drinks.badges.cocktails")],
    },
  ];

  const openingHours = openingHourDays.map((day) => ({
    day: t(`openingHours.${day}`),
    time: openingHourTimes[day],
  }));

  return (
    <main className="bg-background text-foreground relative min-h-dvh overflow-hidden">
      <SiteHeader />

      <header
        id="top"
        className="relative flex min-h-screen min-w-full flex-col-reverse justify-between overflow-hidden sm:min-h-[640px] lg:flex-row"
      >
        <div className="relative flex min-h-[58vh] basis-3/5 flex-col justify-center pt-28 pb-36 lg:min-h-screen lg:pb-0">
          <Image
            src="/pattern.svg"
            alt=""
            width="400"
            height="700"
            aria-hidden="true"
            unoptimized
            className="pointer-events-none absolute top-1/2 left-0 hidden -translate-x-3/4 -translate-y-1/4 opacity-70 lg:block"
          />

          <Container className="relative z-10">
            <div className="max-w-3xl">
              <a
                href={lounge.map.href}
                target="_blank"
                rel="noreferrer"
                className="lounge-link text-foreground mb-5 gap-2 text-lg"
                aria-label={t("hero.addressAriaLabel")}
              >
                <MapPinIcon aria-hidden="true" className="text-primary shrink-0" />
                <span className="font-serif">{lounge.address}</span>
              </a>

              <h1 className="font-heading text-primary text-5xl leading-[1.05] font-bold text-pretty uppercase md:text-7xl xl:text-8xl">
                {t.rich("hero.title", {
                  break: () => <br />,
                })}
              </h1>
            </div>
          </Container>

          <Container className="absolute right-0 bottom-14 left-0 z-10">
            <a
              href="#o-nas"
              className="flex items-center gap-2 text-sm font-medium text-white/60 uppercase"
            >
              <ArrowDownIcon aria-hidden="true" />
              {t("hero.scrollDown")}
            </a>
          </Container>
        </div>

        <div className="relative min-h-[42vh] basis-2/5 lg:min-h-screen">
          <Image
            src={HeroImage}
            alt={t("hero.imageAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover opacity-75"
          />
        </div>
      </header>

      <section id="o-nas" className="relative overflow-hidden py-24 md:py-36 lg:py-48">
        <Image
          src="/pattern.svg"
          alt=""
          width="400"
          height="700"
          aria-hidden="true"
          unoptimized
          className="pointer-events-none absolute top-1/2 right-0 hidden translate-x-1/2 -translate-y-1/2 opacity-70 lg:block xl:translate-x-1/3 2xl:translate-x-0"
        />
        <Container size="md">
          <p className="text-center font-serif text-xl leading-[1.8] font-normal text-pretty md:text-2xl">
            {t("about.description")}
          </p>

          <div className="mx-auto mt-28 grid w-full max-w-xl grid-cols-6 gap-6 md:gap-12 lg:mt-36 xl:gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className={cn(
                    "flex flex-col items-center",
                    index === 0 ? "col-span-6 sm:col-span-2" : "col-span-3 sm:col-span-2"
                  )}
                >
                  <Icon aria-hidden="true" className="text-foreground text-4xl sm:text-5xl" />
                  <span className="mt-3 block text-center text-sm font-semibold uppercase sm:text-base">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="nabidka" className="relative z-10 mt-16 overflow-hidden">
        {offerings.map((offering) => (
          <div
            key={offering.key}
            className={cn("flex flex-col md:flex-row", offering.reverse && "md:flex-row-reverse")}
          >
            <div
              className={cn(
                "flex basis-1/2 flex-col justify-center py-32 lg:py-56",
                offering.shaded && "bg-card"
              )}
            >
              <Container>
                <h2 className="font-heading text-3xl leading-tight font-bold text-white uppercase md:text-4xl">
                  {offering.title}
                </h2>
                <p className="text-muted-foreground mt-6 max-w-xl leading-8">
                  {offering.description}
                </p>
                {(offering.action || offering.badges) && (
                  <div className="mt-16 flex flex-wrap gap-5 md:mt-20 lg:mt-28">
                    {offering.action}
                    {offering.badges?.map((badge) => (
                      <Badge
                        key={badge}
                        variant="outline"
                        className="border-primary text-primary h-auto rounded-none px-2.5 py-2 text-sm font-semibold tracking-widest uppercase"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </Container>
            </div>
            <div className="relative min-h-90 basis-1/2 md:min-h-160">
              <Image
                src={offering.image}
                alt={offering.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      <section id="oteviraci-doba" className="relative overflow-hidden py-24 md:py-36 lg:py-48">
        <Image
          src="/pattern.svg"
          alt=""
          width="500"
          height="800"
          aria-hidden="true"
          unoptimized
          className="pointer-events-none absolute right-0 bottom-0 hidden translate-x-[96%] rotate-90 opacity-70 lg:block xl:translate-x-3/4 2xl:translate-x-1/2"
        />
        <Image
          src="/pattern.svg"
          alt=""
          width="400"
          height="700"
          aria-hidden="true"
          unoptimized
          className="pointer-events-none absolute top-0 left-0 hidden -translate-x-1/2 opacity-70 lg:block xl:-translate-x-1/3"
        />
        <Container size="md">
          <h2 className="font-heading mx-auto text-center text-3xl font-bold text-white uppercase md:text-4xl">
            {t("openingHours.title")}
          </h2>
          <div className="divide-border mx-auto mt-10 max-w-xl divide-y">
            {openingHours.map((item) => (
              <div
                key={item.day}
                className="flex justify-between gap-6 py-6 font-serif text-lg font-normal"
              >
                <span>{item.day}</span>
                <span className="text-right">{item.time}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="kontakt"
        className="relative z-10 flex flex-col overflow-hidden md:flex-row-reverse"
      >
        <div className="bg-card flex basis-1/2 flex-col justify-center py-32 lg:py-56">
          <Container>
            <h2 className="font-heading text-3xl font-bold text-white uppercase md:text-4xl">
              {t("contact.title")}
            </h2>
            <div className="divide-border mt-16 divide-y md:mt-24">
              <div className="flex items-center justify-between gap-4 pb-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-white uppercase">
                    {t("contact.address")}
                  </h3>
                  <span className="font-serif text-lg font-light">{lounge.address}</span>
                </div>
                <Button
                  variant="secondary"
                  size="icon-lg"
                  nativeButton={false}
                  render={
                    <a
                      href={lounge.map.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={t("contact.addressAction")}
                    />
                  }
                >
                  <NavigationIcon aria-hidden="true" />
                </Button>
              </div>

              <div className="flex items-center justify-between gap-4 pt-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-white uppercase">
                    {t("contact.phone")}
                  </h3>
                  <span className="font-serif text-lg font-light">{lounge.phone.label}</span>
                </div>
                <Button
                  variant="secondary"
                  size="icon-lg"
                  nativeButton={false}
                  render={<a href={lounge.phone.href} aria-label={t("contact.phoneAction")} />}
                >
                  <PhoneIcon aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <iframe
          title={t("contact.mapTitle")}
          width="100%"
          src={lounge.map.embed}
          className="min-h-[400px] basis-1/2 border-0"
          loading="lazy"
        />
      </section>

      <section className="relative overflow-hidden py-24 md:py-36 lg:py-48">
        <Image
          src="/pattern.svg"
          alt=""
          width="400"
          height="700"
          aria-hidden="true"
          unoptimized
          className="pointer-events-none absolute top-0 left-0 hidden -translate-x-2/3 -translate-y-1/2 rotate-90 opacity-70 lg:block xl:-translate-x-1/2"
        />
        <Container size="md">
          <h2 className="font-heading mx-auto text-center text-3xl font-bold text-white uppercase md:text-4xl">
            {t("follow.title")}
          </h2>
          <div className="divide-border mx-auto mt-20 max-w-fit divide-y md:grid md:max-w-none md:grid-cols-2 md:divide-x md:divide-y-0">
            {lounge.socials.map((social, index) => (
              <div
                key={social.id}
                className={cn(
                  "flex items-center justify-center gap-3 md:flex-col md:gap-8",
                  index === 0 ? "pb-10 md:pb-0" : "pt-10 md:pt-0"
                )}
              >
                <IconBrand name={social.icon} className="size-8 text-white md:size-12" />
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer me external"
                  aria-label={social.name}
                  className="lounge-link text-primary text-2xl font-semibold md:text-3xl"
                >
                  {social.label}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
