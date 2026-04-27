export function getPublicSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://theloungeplzen.cz").replace(/\/+$/g, "");
}
