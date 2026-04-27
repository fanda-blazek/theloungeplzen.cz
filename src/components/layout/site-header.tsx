"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { PhoneIcon } from "lucide-react";
import { lounge } from "@/config/app";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconBrand } from "@/components/ui/icon-brand";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { FloatingBar } from "@/components/layout/floating-bar";
import { SiteMobileMenu } from "@/components/layout/site-mobile-menu";
import { SiteNavigationMenu } from "@/components/layout/site-navigation-menu";

export function SiteHeader() {
  const t = useTranslations("layout.header");

  return (
    <FloatingBar
      render={<header />}
      position="fixed"
      autoHide={true}
      className="from-background/95 data-scrolled:bg-background/90 z-50 h-20 w-full transform-gpu bg-linear-to-b to-transparent transition duration-300 data-scrolled:backdrop-blur-lg data-hidden:data-scrolled:shadow-none data-hidden:motion-safe:-translate-y-full"
    >
      <Container size="2xl" className="relative flex h-full items-center justify-between gap-6">
        <div className="flex flex-1 items-center gap-6">
          <a
            href={lounge.phone.href}
            className="lounge-link text-primary hidden text-sm font-medium tracking-wider uppercase xl:inline-flex"
            aria-label={t("phoneAriaLabel")}
          >
            {lounge.phone.label}
          </a>
          <span
            aria-hidden="true"
            className="text-foreground/50 pointer-events-none hidden font-semibold xl:block"
          >
            /
          </span>
          <div className="hidden items-center gap-4 xl:flex">
            {lounge.socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer me external"
                aria-label={social.name}
                className="text-foreground flex items-center"
              >
                <IconBrand name={social.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="absolute top-1/2 left-1/2 z-10 flex h-12 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          aria-label={t("homeAriaLabel")}
        >
          <Image
            src="/brand.svg"
            alt=""
            width="112"
            height="48"
            aria-hidden="true"
            unoptimized
            className="size-full object-contain"
          />
        </Link>

        <nav
          aria-label={t("menu.title")}
          className="hidden flex-1 items-center justify-end gap-4 xl:flex"
        >
          <SiteNavigationMenu />
          <LocaleSwitcher />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 xl:hidden">
          <Button
            variant="secondary"
            size="icon-lg"
            nativeButton={false}
            render={
              <a
                href={lounge.phone.href}
                className="hidden sm:inline-flex"
                aria-label={t("phoneAriaLabel")}
              />
            }
          >
            <PhoneIcon aria-hidden="true" />
          </Button>
          <SiteMobileMenu />
        </div>
      </Container>
    </FloatingBar>
  );
}
