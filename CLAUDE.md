# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Website for Grusgropen, a Swedish housing association (BRF). This is a rebuild
of an existing site at https://www.grusgropen.se/, which is the source of
truth for content: text, documents, and images should be migrated from there,
not invented. Keep the Swedish wording close to the original when migrating —
this is a legal/administrative context (board info, house rules, documents),
so don't casually rephrase for style.

## Commands

- `npm run dev` — start the dev server (Turbopack, default in Next 16)
- `npm run build` — static export build; output goes to `out/` (see Architecture)
- `npm run lint` — ESLint via flat config (`eslint.config.mjs`); `next lint` was removed in Next 16, this calls `eslint` directly
- No test framework is configured in this repo.

`npm run start` (`next start`) is present in `package.json` but is inconsistent with `output: 'export'` in `next.config.ts` — a static export has no Node server to start. Serve `out/` with a static file server instead when verifying a production build locally.

## Architecture

- **Static export app**: `next.config.ts` sets `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true`. Every route must be statically renderable at build time — no Route Handlers, Server Actions, middleware/proxy, or dynamic `params`/`cookies`/`headers` that require a request-time server, since none of that runs in a static export.
- **App Router** (`app/`), one page per top-level route: `page.tsx` (home), `boendeinfo/`, `dokument/`, `kontakt/`, `maklare/`. The four non-home pages are currently placeholder stubs (`"use client"`, unused `useState`/`useEffect`, a single `<h1>`) awaiting content migration from the old site — Swedish labels: Boendeinfo = resident info, Dokument = documents, Kontakt = contact, För Mäklare = for real estate brokers.
- **Layout shell**: `app/layout.tsx` wraps every page with `components/navbar/Navbar.tsx`. The shell's own layout CSS (`.layout-container`, `.content-wrapper`) lives in `app/globals.css`, not co-located with the Navbar component — check there first when adjusting page/sidebar sizing.
- **Navbar** is a single responsive component (no separate mobile/desktop components): a top bar with hamburger toggle below the 768px breakpoint, a fixed left sidebar above it. Active-route highlighting uses `usePathname()` against a `navLinks` array — add new routes there to get nav + active-state handling for free.
- **Styling** is mixed: CSS custom properties for the color theme defined in `app/globals.css` `:root` (`--bg-main`, `--bg-sidebar`, `--accent-gold`, `--text-main`, `--text-muted`), per-component CSS Modules (`Navbar.module.css`), and Tailwind v4 (`@tailwindcss/postcss`) available but not yet used on most pages — prefer matching the existing CSS Modules/custom-properties pattern over introducing Tailwind utility classes on these pages.
- Path alias `@/*` → project root (`tsconfig.json`), e.g. `@/components/navbar/Navbar`.
- `out/` and `.next/` are generated build artifacts — never hand-edit.

## Content migration workflow

When filling in a stub page from the old site:
1. Fetch the corresponding page(s) from https://www.grusgropen.se/ and inventory the content before writing any code.
2. Match it to the right route (`boendeinfo/`, `dokument/`, `kontakt/`, `maklare/`) based on what the content actually is, not just the old site's URL structure — it may not map 1:1.
3. Follow the existing styling pattern (CSS Modules + custom properties), not Tailwind, unless told otherwise.
4. Leave a short comment near the top of the page component noting the old-site URL it was migrated from, for traceability.
5. Run `npm run build` after migrating a page to confirm it still exports statically — no accidental client-only APIs that break the export.