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
    <ul className={cn("flex items-center gap-1", className)}>
      {landingMenu.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className={cn(
              "hover:bg-muted focus-visible:ring-ring/50 inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-3",
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
