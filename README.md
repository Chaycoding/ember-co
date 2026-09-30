# Ember & Co.

A single-page landing page for a fictional Colombo restaurant, built as a take-home assignment for Happy Chimps.

**Live site:** https://ember-co-gamma.vercel.app/

## Concept

Live fire. The page is built around a charcoal-and-ember palette, a serif display face against a clean sans, and a hero where flames and drifting embers set the mood. The dishes are laid out like a printed menu, and hovering a row swaps the photo beside it.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS v4
- `next/image` for optimised images, `next/font` for self-hosted fonts (Fraunces and Inter)
- Deployed on Vercel

## Performance approach

- Server-rendered, so all content is in the initial HTML
- Client components are limited to the mobile menu, scroll-reveal observer, dish hover, and the reservation form
- Animation is CSS only, on `transform` and `opacity`, with `prefers-reduced-motion` support
- No animation or UI libraries
- PageSpeed Insights: 95 mobile, 100 desktop

## Project structure

```
src/
  app/          layout, page, global styles
  components/   Navbar, MobileMenu, Hero, Marquee, About, Dishes,
                Reservation, Footer, RevealObserver
public/         hero and dish images
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## AI usage

I used Claude to plan, drafting component code, and to further enhance the build. The concept, palette, copy and image choices are mine, and I reviewed and edited the generated code.

## With more time

- Real photography
- A validated form wired to a booking API
- Better touch behaviour for the dish images
- A full Lighthouse and accessibility pass
