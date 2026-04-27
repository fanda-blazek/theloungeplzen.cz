export type LandingMenuLink = {
  labelKey: "home" | "experience" | "reservation";
  href: "#top" | "#experience" | "#reservation";
};

export const landingMenu = [
  { labelKey: "home", href: "#top" },
  { labelKey: "experience", href: "#experience" },
  { labelKey: "reservation", href: "#reservation" },
] as const satisfies LandingMenuLink[];
