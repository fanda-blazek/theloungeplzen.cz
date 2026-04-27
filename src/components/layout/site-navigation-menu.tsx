"use client";

import { useTranslations } from "next-intl";
import { landingMenu } from "@/config/menu";
import { cn } from "@/lib/utils";

type SiteNavigationMenuProps = {
  className?: string;
  linkClassName?: string;
};

export function SiteNavigationMenu({ className, linkClassName }: SiteNavigationMenuProps) {
  const t = useTranslations("layout.navigation.items");

  return (
    <ul className={cn("flex items-center gap-6", className)}>
      {landingMenu.map((item) => (
        <li key={item.labelKey}>
          <a
            href={item.href}
            className={cn(
              "lounge-link text-foreground text-sm font-medium tracking-wider",
              linkClassName
            )}
          >
            {t(item.labelKey)}
          </a>
        </li>
      ))}
    </ul>
  );
}
