# Green with Giri — Botanical Boutique

A high-fidelity e-commerce landing page for a botanical boutique, built with a fully open-source stack.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router, TypeScript) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/) |
| Database | [PostgreSQL](https://www.postgresql.org/) + [Prisma ORM](https://www.prisma.io/) |
| Payments | [Razorpay](https://razorpay.com/) (INR) |
| Auth | [NextAuth.js](https://next-auth.js.org/) |
| Deployment | Docker + GitHub Actions → Any VPS |

## Getting Started

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Copy environment variables
cp .env.example .env
# Fill in your Razorpay keys and DB URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to `main` triggers the GitHub Actions pipeline:
1. Lint & build check
2. Docker image built and pushed to GHCR
3. SSH deploy to your VPS

See `.github/workflows/deploy.yml` for configuration.

## Image Credits

Plant photographs are sourced from [Unsplash](https://unsplash.com/) and used under the [Unsplash License](https://unsplash.com/license) (free for commercial and non-commercial use, no attribution required but appreciated).

Photos by:
- [Huy Phan](https://unsplash.com/@huyphan) — Monstera, indoor plants
- [Severin Candrian](https://unsplash.com/@ffrannng) — Fiddle leaf fig
- [Ksenia Chernaya](https://unsplash.com/@kseniachernaya) — Snake plant
- [Teona Swift](https://unsplash.com/@teonaswift) — Pothos, trailing plants
- [Scott Webb](https://unsplash.com/@scottwebb) — Bird of paradise, tropical plants
- [Sarah Bronske](https://unsplash.com/@sarahbronske) — Ferns, hanging plants
- [Kaufmann Mercantile](https://unsplash.com/@kaufmann_mercantile) — Rubber plant, dark foliage
- [Linh Le](https://unsplash.com/@linhle) — ZZ plant, minimal pots

All images are served via the Unsplash CDN (`images.unsplash.com`). In production, replace with your own product photography.

## License

Private repository. All rights reserved.
