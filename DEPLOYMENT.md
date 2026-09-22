# Aivora Deployment Guide

Aivora is built on Next.js 15 and is designed for zero-config global edge deployment on Vercel, Netlify, Cloudflare Pages, or self-hosted Docker environments.

---

## 1. Deploying to Vercel (Recommended)

The easiest way to deploy Aivora is with the [Vercel Platform](https://vercel.com/new).

### Steps
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project into Vercel.
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build` or `pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`
4. Click **Deploy**.

---

## 2. Docker Self-Hosting

You can containerize Aivora using the standard Next.js standalone output:

### Dockerfile
```dockerfile
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t aivora .
docker run -p 3000:3000 aivora
```

---

## 3. Environment Configuration

Aivora runs 100% locally and does not require third-party environment secrets for the core application.
An optional `.env.example` is provided for future integrations:

```env
# Optional: Site URL for canonical OpenGraph tags
NEXT_PUBLIC_SITE_URL=https://aivora.dev
```
