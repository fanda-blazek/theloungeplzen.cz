"use client";

import { useTranslations } from "next-intl";
import { app } from "@/config/app";
import { landingMenu } from "@/config/menu";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export function SiteFooter() {
  const t = useTranslations("layout.footer");
  const tNav = useTranslations("layout.navigation.items");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <Container className="grid gap-10 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="flex max-w-md flex-col gap-3">
          <a href="#top" className="flex w-fit items-center gap-3 font-semibold">
            <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-md text-sm">
              TL
            </span>
            <span>{app.site.name}</span>
          </a>
          <p className="text-muted-foreground text-sm leading-6">{t("description")}</p>
          <p className="text-muted-foreground text-sm">
            {t("copyright", {
              year: currentYear,
              company: app.site.name,
            })}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-[auto_auto_auto]">
          <nav aria-label={t("navigationLabel")} className="flex flex-col gap-3">
            <p className="text-sm font-semibold">{t("navigationTitle")}</p>
            <div className="flex flex-col gap-2">
              {landingMenu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {tNav(item.labelKey)}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">{t("contactTitle")}</p>
            <div className="flex flex-col gap-2">
              <a
                href={t("emailHref")}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {t("email")}
              </a>
              <p className="text-muted-foreground text-sm">{t("location")}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">{t("languageTitle")}</p>
            <LocaleSwitcher />
          </div>
        </div>
      </Container>
    </footer>
  );
}
