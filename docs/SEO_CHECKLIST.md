# SEO Checklist — aruratherapy.com

Last updated: 2026-04-09

---

## Completed

### Technical SEO (codebase)

| Item | Implementation |
|------|------------------|
| Canonical URLs | `src/components/seo/SeoTechnical.tsx` — per **indexable** route (`src/config/seoRoutes.ts`); query strings preserved |
| Soft 404 control | Unknown paths → `noindex, nofollow`; valid slugs only for services / conditions / programs |
| Site URL | `src/config/site.ts` — production defaults to `https://aruratherapy.com`; optional `VITE_SITE_URL` in `.env` |
| robots.txt | `public/robots.txt` — `Allow: /` + sitemap URL |
| XML sitemap | `public/sitemap.xml` — static URLs + service / condition / program slugs |
| Env template | `.env.example` |
| Build | `npm run build` — `robots.txt` / `sitemap.xml` in `dist/` |

**Files:** `SeoTechnical.tsx`, `seoRoutes.ts`, `site.ts`, `Layout.tsx`, `public/robots.txt`, `public/sitemap.xml`, `.env.example`

**After deploy (you):** Search Console + **Bing Webmaster Tools** — verify property, submit `sitemap.xml`; SPA `index.html` fallback for all routes; HTTPS; optional www → apex **301** (single preferred host; avoid duplicate HTTP/HTTPS or www/non-www in index).

**Ongoing (measure in prod):** Core Web Vitals, site speed, crawl for broken internal/external links, fix **HTTP** asset links on HTTPS pages, legacy URL redirects (**301** vs **302** audit), crawl errors in GSC/Bing.

**Not applicable here:** WordPress SEO plugin — this site is a React/Vite SPA, not WordPress; on-page SEO is handled in code (`SeoTechnical`, `PageHeader`, content).

---

### Structured data / Schema.org (codebase)

| Item | Implementation |
|------|------------------|
| Organization | `src/config/structuredDataClinic.ts` — `@id` …`/#organization`; logo, email, URL |
| MedicalClinic | Same module — linked to Organization; address, contactPoint, areaServed, specialties |
| WebSite | Publisher → Organization `@id` |
| BreadcrumbList | `src/config/breadcrumbJsonLd.ts` + `GlobalStructuredData.tsx` — dynamic trail for all routes **except** `/` (home has no breadcrumb JSON-LD) |
| FAQPage | `src/pages/Home.tsx` — FAQ visible on page + matching `FAQPage` JSON-LD only on Home |
| Service (therapy services) | `src/pages/ServiceDetail.tsx` — `Service` schema per `/services/:serviceId` with `provider` → clinic `@id` |

**Files:** `GlobalStructuredData.tsx` (mounted in `Layout.tsx`), `structuredDataClinic.ts`, `breadcrumbJsonLd.ts`, `ServiceDetail.tsx`, `Home.tsx` (FAQ only)

**You:** Validate URLs in [Google Rich Results Test](https://search.google.com/test/rich-results) after deploy.

---

### General (site content & UX)

| Item | Notes |
|------|--------|
| Core pages & routes | Home, About, Services, service/condition/program detail, Contact, Testimonials, Blog, Gallery, School Readiness, booking |
| Meta on major pages | Helmet / PageHeader on key pages |
| Local copy | Chennai + partner areas in content |
| Internal navigation | Header, footer, CTAs |
| Conversions | Booking modal, contact, Google review flow on Testimonials |

---

## Not completed

### Keyword research

| Item | Owner |
|------|--------|
| Identify **competitors** (local + niche) | SEO + you |
| **Main keywords** + **long-tail** variations per page / topic | SEO + you |
| Primary **keyword map** (1 focus keyword per page; watch **cannibalisation**) | SEO + you |
| **Keyword difficulty** check for target terms | SEO + you |
| **SERP intent:** analyse top results for target queries (informational vs local vs transactional) | SEO + you |
| **Questions** people ask (People Also Ask, forums, parents) — feed FAQs & blog | SEO + content |

### On-page SEO

| Item | Owner |
|------|--------|
| Title tags tuned for CTR + Chennai/local intent | SEO + content |
| Meta descriptions unique, ~150–160 chars, benefit-led | SEO + content |
| Audit **duplicate or missing** title tags and meta descriptions sitewide | Dev + SEO + content |
| **Multiple H1** tags — find and fix (one clear H1 per page) | Dev + content |
| H1/H2 outline audit sitewide | Dev + content |
| Image `alt` text pass (heroes + key sections) | Dev + content |
| **Content audit:** prune or merge **low-performing** thin/duplicate pages; refresh stale copy | SEO + content |
| **Keep content current** — review key pages on a schedule | Content |
| **Keyword cannibalisation** — same intent competing across URLs; consolidate or differentiate | SEO + content |

### Structured data — optional next steps

| Item | Owner |
|------|--------|
| `Service` / `MedicalTherapy` on `/programs/:programId` | Dev |
| Condition-specific medical schema on `/conditions/:id` (if appropriate) | Dev + SEO |
| `sameAs` social URLs on Organization when profiles are final | You + dev |

### Technical SEO (post-launch / recurring)

| Item | Owner |
|------|--------|
| **HTTPS** everywhere; no duplicate indexable **HTTP** vs **HTTPS** or **www** vs apex | Hosting + you |
| **Crawl errors** in GSC/Bing — fix 404s, server errors, soft 404s | Dev + you |
| **Redirects:** prefer **301** for permanents; audit **302** chains / loops | Dev + hosting |
| **SEO-friendly URLs** — readable paths; consistent trailing slash policy | Dev |
| **Page depth** — important pages within few clicks of home (see orphan check below) | SEO + IA |

### Internal linking

| Item | Owner |
|------|--------|
| Body-copy links: service ↔ condition ↔ blog | Content |
| “Related services / related reads” blocks | Dev + content |
| Orphan-page check (≤3 clicks from home) | SEO |

### Local & off-page

| Item | Owner |
|------|--------|
| **Google Business Profile (GMB)** — categories, services, photos, Q&A, posts, attributes | You |
| NAP match: site ↔ GBP ↔ directories | You |
| Reviews (weekly rhythm; QR on site helps) | You |
| Citations & backlinks (schools, paediatricians, local lists) | You |
| **Competitor backlink audit** — where they get links | SEO + you |
| **Link intersect** — sites linking to competitors but not you | SEO + you |
| **Unlinked mentions** — find brand/center mentions without a link; polite outreach | You |
| **New link-building opportunities** — partners, resources, local orgs | You |

### Content & E-E-A-T

| Item | Owner |
|------|--------|
| Real team names, degrees, photos on About | You |
| Blog cadence (e.g. 2–4 posts/month) | You |
| Thin/duplicate city landing pages — avoid unless unique copy | SEO |

### Analytics & webmaster consoles

| Item | Owner |
|------|--------|
| GA4 on `aruratherapy.com` | You |
| Google Search Console — verify, sitemap, **manual actions** / security issues | You |
| **Bing Webmaster Tools** — verify, sitemap | You |
| Conversion events (call, WhatsApp, form, booking) | Dev + you |
| Monthly GSC (+ Bing) review: queries, CTR, **coverage / crawl errors**, indexing | You |
| **Indexing:** confirm key URLs appear in Google/Bing; request indexing for important new pages | You |

### Your checklist (non-code)

| ☐ | Task |
|---|------|
| ☐ | Top 10 priority keywords (+ long-tail & difficulty notes) |
| ☐ | Competitor list + SERP intent notes for main queries |
| ☐ | Final NAP matching GBP |
| ☐ | GBP (GMB) maintenance habit |
| ☐ | GSC + **Bing** verified; sitemaps submitted; check **manual actions** |
| ☐ | Confirm site **indexed** (site: search + coverage) |
| ☐ | Review request workflow |
| ☐ | Team bios + photos |
| ☐ | Backlink / partnership targets + link intersect / unlinked mentions |
| ☐ | Content calendar |
| ☐ | Submit sitemap in Search Console **and Bing** |
| ☐ | Confirm SPA hosting rewrites |
| ☐ | Rich Results Test on key URLs |
| ☐ | Broken link scan; **HTTP→HTTPS** link fixes |
| ☐ | Redirect map (301) & duplicate URL check |

---

## Quick score (self-audit)

| Pillar | Score (0–5) |
|--------|-------------|
| Technical | 5 |
| Structured data | 5 _(implement Rich Results Test after live)_ |
| Keyword research | ___ |
| On-page | ___ |
| Internal links | ___ |
| Local / off-page | ___ |
| Content / E-E-A-T | ___ |
| Measurement | ___ |

---

## When you add routes or slugs

1. `src/config/seoRoutes.ts`  
2. `public/sitemap.xml`  
3. `src/config/breadcrumbJsonLd.ts` (static labels if new top-level segment)  
4. Rebuild and redeploy  

---

## Domain

Production: **https://aruratherapy.com** — align Search Console, Bing Webmaster Tools, GA4, and GBP with this URL (HTTPS).
