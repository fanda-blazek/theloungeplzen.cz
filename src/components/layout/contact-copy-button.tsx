"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

type ContactCopyButtonProps = {
  value: string;
  ariaLabel: string;
  successMessage: string;
  className?: string;
};

export function ContactCopyButton({
  value,
  ariaLabel,
  successMessage,
  className,
}: ContactCopyButtonProps) {
  return (
    <CopyButton
      toCopy={value}
      aria-label={ariaLabel}
      onCopy={() => toast.success(successMessage)}
      className={cn(buttonVariants({ variant: "secondary", size: "icon-lg" }), className)}
    >
      {({ isCopied }) =>
        isCopied ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />
      }
    </CopyButton>
  );
}
