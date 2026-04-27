"use client";

import { useTranslations } from "next-intl";
import { app } from "@/config/app";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { FloatingBar } from "@/components/layout/floating-bar";
import { SiteMobileMenu } from "@/components/layout/site-mobile-menu";
import { SiteNavigationMenu } from "@/components/layout/site-navigation-menu";

export function SiteHeader() {
  const t = useTranslations("layout.header");

  return (
    <FloatingBar
      render={<header />}
      position="sticky"
      autoHide={true}
      className="bg-background/75 z-50 h-(--navbar-height,64px) w-full transform-gpu backdrop-blur-2xl transition duration-300 data-hidden:data-scrolled:shadow-none data-hidden:motion-safe:-translate-y-full"
    >
      <Container size="full" className="flex h-full items-center justify-between gap-6">
        <div className="flex flex-1 items-center gap-4">
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold"
            aria-label={t("homeAriaLabel")}
          >
            <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-md text-sm">
              TL
            </span>
            <span>{app.site.name}</span>
          </a>
        </div>

        <nav
          aria-label={t("menu.title")}
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <SiteNavigationMenu />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <LocaleSwitcher className="hidden sm:flex" />
          <SiteMobileMenu />
        </div>
      </Container>
    </FloatingBar>
  );
}
