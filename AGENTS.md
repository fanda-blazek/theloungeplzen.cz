# Repository Instructions

This is a single Next.js application for a localized landing page.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This project uses a recent Next.js version with breaking API and file-structure changes. Before changing framework behavior, route conventions, metadata, proxy/middleware, or rendering APIs, check the relevant guide in `node_modules/next/dist/docs/` and follow deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project Shape

- Use `npm` for dependency management.
- Keep app code in `src/**`.
- Keep routes minimal: `/`, `/cs`, and `/en`, plus framework files for 404, metadata, robots, sitemap, and manifest.
- Do not add backend services, API routes, monorepo tooling, test frameworks, or deployment stacks unless explicitly requested.
- Keep shared UI small and direct. Use existing shadcn/Base UI primitives before adding new components.

## Code Style

- Use named function exports where practical.
- Use double quotes, semicolons, 2-space indent, trailing commas, and print width 100.
- Never use `any`. Prefix intentionally unused variables or args with `_`.
- Use `size-*` when width and height are equal; do not combine `w-* h-*`.
- Prefer named React hook imports, such as `import { useState } from "react"`.
- Keep setup sections readable: group related constants, hooks, derived values, and handlers with blank lines.

## Next.js

- Use `proxy.ts` for request interception. Do not add `middleware.ts`.
- `params` and `searchParams` are async in this Next.js version and must be awaited.
- `cookies()`, `headers()`, and `draftMode()` must be awaited.
- Never mutate cookies during Server Component, page, or layout render.
- For internal localized links, use `@/components/ui/link` or `@/i18n/navigation`.
- For external URLs, hash links, `mailto:`, and `tel:`, use a native `<a>`.

## Internationalization

- All user-facing copy belongs in `messages/cs.json` and `messages/en.json`.
- Keep top-level message sections simple: `common`, `layout`, and `pages`.
- Do not hardcode localized UI strings in components or config.
- `src/config/*` is for structural site data, not localized copy.
- Do not manually build localized URLs with `/${locale}/...`; use helpers from `@/i18n/navigation`.
- Keep route keys in English. Czech aliases, if ever needed, belong only in `src/i18n/routing.ts`.

## Tailwind CSS v4

- Use `@import "tailwindcss"`; do not use old `@tailwind base/components/utilities`.
- Use opacity slash syntax like `bg-black/50`, not `bg-opacity-50`.
- Use `bg-(--brand-color)`, not `bg-[--brand-color]`.
- Use `gap-*` inside flex/grid layouts.
- Use `margin-top` or explicit section padding for vertical spacing between sections.

## Components & UI

- Keep `src/components/ui` shadcn-compatible.
- Keep `src/lib/utils.ts` limited to shadcn-safe utilities, currently `cn()`.
- Lucide icons should use the `Icon` suffix and decorative icons need `aria-hidden="true"`.
- Icons inside `Button` should use `data-icon="inline-start"` or `data-icon="inline-end"`.
- `Button` with a non-`button` render target must set `nativeButton={false}`.
- Prefer inline composition with existing primitives over one-off wrapper components.
- Add abstractions only when they reduce real complexity or match an established local pattern.

## State

- Avoid raw `useEffect` in app code.
- Prefer render-time derivation, event handlers, server data, `key`, or `useSyncExternalStore`.
- Keep one source of truth per interactive surface.
