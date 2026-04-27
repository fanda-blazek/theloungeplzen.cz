"use client";

import { ArrowUpIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { lounge } from "@/config/app";
import { Container } from "@/components/ui/container";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export function SiteFooter() {
  const t = useTranslations("layout.footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full">
      <Container className="text-muted-foreground relative flex flex-col items-center gap-10 py-10 text-sm lg:flex-row lg:justify-between lg:py-16">
        <div className="mt-16 flex flex-col items-center gap-2 text-center lg:mt-0 lg:items-start">
          <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-10">
            <span className="text-muted-foreground lg:text-foreground text-xs font-medium uppercase">
              {t("copyright", {
                year: currentYear,
              })}
            </span>
            <span className="text-muted-foreground lg:text-foreground text-xs font-medium uppercase">
              {t("rights")}
            </span>
          </div>
        </div>

        <LocaleSwitcher />
      </Container>

      <Container className="flex items-center justify-center pb-6">
        <p className="max-w-sm text-center text-sm leading-6">
          {t("operatorInfo")}: <br /> {lounge.operator.company}, <br /> {lounge.operator.address},{" "}
          <br />
          {t("companyId", {
            ico: lounge.operator.ico,
          })}
        </p>
      </Container>
    </footer>
  );
}
