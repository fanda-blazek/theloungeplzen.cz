"use client";

import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { landingMenu } from "@/config/menu";
import { Button } from "@/components/ui/button";
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
    <div className="flex items-center gap-2 lg:hidden">
      <MobileMenu>
        <Button
          variant="secondary"
          size="icon-lg"
          aria-label={t("menu.openAriaLabel")}
          nativeButton={true}
          render={<MobileMenuTrigger />}
        >
          <MenuIcon aria-hidden="true" />
        </Button>
        <MobileMenuContent>
          <MobileMenuHeader>
            <MobileMenuTitle>{t("menu.title")}</MobileMenuTitle>
          </MobileMenuHeader>

          <div className="flex flex-col gap-6">
            <nav aria-label={t("menu.title")}>
              <ul className="divide-border flex flex-col divide-y">
                {landingMenu.map((item) => (
                  <li key={item.href}>
                    <MobileMenuClose
                      render={<a href={item.href} className="text-foreground block w-full py-3" />}
                    >
                      {tNav(item.labelKey)}
                    </MobileMenuClose>
                  </li>
                ))}
              </ul>
            </nav>

            <MobileMenuFooter>
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
          </div>
        </MobileMenuContent>
      </MobileMenu>
    </div>
  );
}
