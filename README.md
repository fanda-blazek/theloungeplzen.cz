# The Lounge Plzeň

Simple localized Next.js landing page for The Lounge Plzeň.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- next-intl for `cs` and `en`
- shadcn/Base UI primitives

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run check-types
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Environment

The app works without local environment variables. To override the production site URL used for metadata, sitemap, and robots output, copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://theloungeplzen.cz
```

## Routing

- `/` redirects to `/cs`
- `/cs` renders the Czech landing page
- `/en` renders the English landing page
