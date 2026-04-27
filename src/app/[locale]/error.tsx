"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type Props = {
  error: Error & {
    digest?: string;
  };
  reset(): void;
};

export default function Error({ error: _error, reset }: Props) {
  const t = useTranslations("common.error");

  return (
    <main className="flex min-h-dvh items-center py-12">
      <Container size="sm" className="flex flex-col items-center gap-4 text-center">
        <p className="text-primary text-sm font-medium">{t("eyebrow")}</p>
        <h1 className="font-heading text-3xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground max-w-prose">{t("description")}</p>
        <Button onClick={reset}>{t("retry")}</Button>
      </Container>
    </main>
  );
}
