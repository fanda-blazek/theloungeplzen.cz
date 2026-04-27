const DEFAULT_SITE_URL = "https://theloungeplzen.cz";

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/+$/g, "");
}

export const app = {
  site: {
    name: "The Lounge Plzeň",
    defaultTitle: "The Lounge Plzeň",
    defaultDescription:
      "The Lounge - shisha bar, kde si vyberete z bohaté nabídky vodních dýmek a nápojů.",
    url: getSiteUrl(),
  },
  metadata: {
    authors: [
      {
        name: "The Lounge Plzeň",
        url: getSiteUrl(),
      },
    ],
  },
};

export const lounge = {
  address: "Náměstí Republiky 136/22, 301 00 Plzeň 3",
  phone: {
    label: "+420 720 544 523",
    href: "tel:+420720544523",
  },
  map: {
    href: "https://www.google.com/maps/place/THE+LOUNGE/@49.746392,13.3748784,17z/data=!3m1!4b1!4m5!3m4!1s0x470af169399be1a5:0x715ba80afaa19dc6!8m2!3d49.7463886!4d13.3770671",
    embed:
      "https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=N%C3%A1m%C4%9Bst%C3%AD%20Republiky%20136/22,%20301%2000%20Plze%C5%88%203+(The%20Lounge)&t=&z=15&ie=UTF8&iwloc=B&output=embed",
  },
  socials: [
    {
      id: "instagram",
      name: "Instagram",
      href: "https://instagram.com/the__lounge__",
      label: "@the__lounge__",
      icon: "instagram",
    },
    {
      id: "facebook",
      name: "Facebook",
      href: "https://www.facebook.com/theloungeplzen",
      label: "@theloungeplzen",
      icon: "facebook",
    },
  ] as const,
  operator: {
    company: "One Three Four Company s.r.o.",
    address: "Palackého náměstí 618/24, Plzeň, 30100",
    ico: "07522118",
  },
};
