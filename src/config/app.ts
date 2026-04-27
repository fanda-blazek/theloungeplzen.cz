const DEFAULT_SITE_URL = "https://theloungeplzen.cz";

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/+$/g, "");
}

export const app = {
  site: {
    name: "The Lounge Plzeň",
    defaultTitle: "The Lounge Plzeň",
    defaultDescription: "Stylový lounge bar v Plzni pro večery, oslavy a soukromé akce.",
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
