export type LandingMenuLink = {
  labelKey: "about" | "offerings" | "openingHours" | "address" | "contact";
  href: "#o-nas" | "#nabidka" | "#oteviraci-doba" | "#kontakt";
};

export const landingMenu = [
  { labelKey: "offerings", href: "#nabidka" },
  { labelKey: "openingHours", href: "#oteviraci-doba" },
  { labelKey: "address", href: "#kontakt" },
  { labelKey: "contact", href: "#kontakt" },
] as const satisfies LandingMenuLink[];
