import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type IconBrandName = "facebook" | "instagram";

type IconBrandProps = Omit<ComponentPropsWithoutRef<"svg">, "children" | "viewBox"> & {
  name: IconBrandName;
};

export function IconBrand({ name, className, ...props }: IconBrandProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className={cn("size-4 fill-current", className)}
      {...props}
    >
      {name === "instagram" ? <InstagramPath /> : <FacebookPath />}
    </svg>
  );
}

function InstagramPath() {
  return (
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
  );
}

function FacebookPath() {
  return (
    <path d="M14.1 8.9V7.2c0-.8.5-1 1-1h2.1V2.4L14.1 2c-3.1 0-5.2 1.9-5.2 5.2v1.7H5.6V13h3.3v9h4.2v-9h3.5l.6-4.1h-4.1Z" />
  );
}
