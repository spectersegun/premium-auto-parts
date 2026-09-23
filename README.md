# PREMIUM Auto Parts

Standalone Next.js (App Router) site for the Auto Parts division of Premier HQ Limited.

**Theme** — `#c4452d` industrial red-orange on graphite. Built on the Industry design system: Barlow Condensed headings over Barlow, blueprint corner registration marks, square corners, hairline borders.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Routes

- `/` — home: hero carousel, 7 categories, VIN matching, freight comparison, trust bar
- `/catalogue` — full catalogue, add-to-order per category
- `/about` — mission, vision, value props, USA sourcing
- `/contact` — enquiry form
- `/checkout` — order summary, freight choice, submit

## Checkout

Add part categories to an order, choose air (7–14 days) or sea (4–8 weeks) freight, submit an order request. Reference format `AP-xxxxxx`.

No payment gateway is wired. Submitting composes a fully itemised email to
`info@thepremiumcompanies.online` via `mailto:`. To take payment online, replace
`submitOrder()` in `lib/order.js` with a POST to an API route and add a provider —
Paystack or Flutterwave are the usual choices for NGN.

## Structure

```
app/
  layout.js         html shell + metadata
  globals.css       Industry tokens + the three theme classes
  page.js           home
components/
  SiteChrome.js     nav, footer, cart drawer, theme class
  Header.js         sticky header with live cart count
  CartDrawer.js     slide-out cart
  Blueprint.js      Frame / Corners / BpButton — the blueprint primitives
  HeroCarousel.js   cross-fading hero images
lib/
  data.js           all site content and contact details
  cart.js           cart context/provider
  order.js          order submission + reference generation
public/assets/      logo + photography
```

## Cross-site links

`SIBLINGS` in `lib/data.js` holds the links to the other two PREMIUM sites.
They point at placeholder subdomains — edit them to your real deployed URLs.

## Editing content

All copy, categories, contact details and project captions live in `lib/data.js`.
Colours are the `--color-accent*` variables in the theme class at the bottom of
`app/globals.css`.
# premium-auto-parts
# premium-auto-parts
# premium-building-materials
