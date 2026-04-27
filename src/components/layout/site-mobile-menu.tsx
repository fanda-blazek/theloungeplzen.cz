"use client";

import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { landingMenu } from "@/config/menu";
import { lounge } from "@/config/app";
import { Button } from "@/components/ui/button";
import { IconBrand } from "@/components/ui/icon-brand";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import {
  MobileMenu,
  MobileMenuClose,
  MobileMenuContent,
  MobileMenuFooter,
  MobileMenuHeader,
  MobileMenuTitle,
  MobileMenuTrigger,
} from "@/components/ui/mobile-menu";

export function SiteMobileMenu() {
  const t = useTranslations("layout.header");
  const tNav = useTranslations("layout.navigation.items");

  return (
    <div className="flex items-center gap-2 xl:hidden">
      <MobileMenu direction="right">
        <Button
          variant="secondary"
          size="icon-lg"
          aria-label={t("menu.openAriaLabel")}
          nativeButton={true}
          render={<MobileMenuTrigger />}
        >
          <MenuIcon aria-hidden="true" />
        </Button>
        <MobileMenuContent className="flex min-h-[calc(100dvh-2rem)] flex-col gap-10 py-8">
          <MobileMenuHeader>
            <MobileMenuTitle className="text-primary text-center uppercase">
              {t("menu.title")}
            </MobileMenuTitle>
          </MobileMenuHeader>

          <nav aria-label={t("menu.title")}>
            <ul className="flex flex-col items-center gap-5 text-center">
              {landingMenu.map((item) => (
                <li key={item.labelKey}>
                  <MobileMenuClose
                    render={
                      <a
                        href={item.href}
                        className="lounge-link text-foreground text-xl font-semibold uppercase"
                      />
                    }
                  >
                    {tNav(item.labelKey)}
                  </MobileMenuClose>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-8">
            <MobileMenuClose
              render={
                <a
                  href={lounge.phone.href}
                  className="lounge-link text-primary text-2xl font-semibold"
                />
              }
            >
              {lounge.phone.label}
            </MobileMenuClose>
            <LocaleSwitcher />
          </div>

          <MobileMenuFooter className="items-center gap-6">
            <div className="flex flex-col justify-center gap-2">
              {lounge.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer me external"
                  aria-label={social.name}
                  className="text-foreground flex items-center gap-2 p-2 text-base font-medium tracking-wider uppercase"
                >
                  <IconBrand name={social.icon} />
                  {social.name}
                </a>
              ))}
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              nativeButton={true}
              render={<MobileMenuClose />}
            >
              {t("menu.close")}
            </Button>
          </MobileMenuFooter>
        </MobileMenuContent>
      </MobileMenu>
    </div>
  );
}
