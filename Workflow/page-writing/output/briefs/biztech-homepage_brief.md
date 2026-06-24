<!-- page-researcher brief — BiztechCS Homepage — 2026-06-19 -->

# Brief: BiztechCS Homepage

| Field | Value |
|---|---|
| Page type | homepage |
| Slug | biztech-homepage |
| Target URL | / |
| Target keyword | enterprise software development company |
| Secondary keywords | offshore software development, custom enterprise software, AI software development company, ERP/ecommerce/cloud consulting |
| Audience segment | `enterprise` (primary) + `startups` + `industry-buyers` |
| Primary goal | Convert a skeptical out-of-India decision-maker into a booked 30-min call |
| Primary CTA | **Book a 30-min Call** → `#cta` |
| Secondary CTA | **See our work** → `#work` |
| Schema | Organization + WebSite + FAQPage |
| Competitor-analysis inputs | none present → researcher used BUSINESS.md + REDESIGN-PLAN.md |

## The buyer (top of every decision)
Decision-maker OUTSIDE India (USA → UK/EU → AUS/ME). Evaluating an India-based partner.
Three questions answered in 10 seconds:
1. **Will my project succeed?** → outcomes, metrics, named-type clients, case studies.
2. **Can I trust them with IP/data/timeline?** → ISO 27001/9001, IP transfer, contracts, US/EU presence.
3. **Is it easy across time zones?** → US/EU project leads, daily overlap, fluent English.

## Positioning (the core idea)
Shift FROM "A Global Leader in IT Services" TO:
**"Enterprise software, delivered with US/EU accountability and global engineering scale."**
Trust = named outcomes + certifications + contracts, NOT years/headcount alone. Show, don't tell.

## Section Blueprint (homepage) — canonical order, maps 1:1 to live React sections
Narrative arc: **Hook → instant proof → capability (what/how we build) → social proof → brand/expertise → objections → convert.**
Reviewed & reordered 2026-06-19: moved Tech Stack into the capability cluster (after Process) and moved FAQ *before* the CTA so the page ends on the conversion ask.

| # | Section | Cluster | Job | React component |
|---|---|---|---|---|
| 01 | **Hero** | Hook | Outcome-led H1 + positioning sub + dual CTA + trust strip (ISO, Clutch, offices) + live stat strip (1200+/98%/80%) | `Hero.jsx` |
| — | **Logo wall + proof bar** | Instant proof | "Trusted by 200+" marquee + 4 quantified outcomes (+52%, 60%, 3×, $2.4M client-paired cards) | `Sections.Ticker` |
| 02 | **Services** | Capability | 6-tile bento, AI/GenAI as feature; outcome-framed | `Sections.Services` |
| 03 | **Featured work** | Capability | 3 case studies w/ metric + industry tag (horizontal pin) | `WorkPin.jsx` |
| 04 | **Why Biztech / Trust** | Capability | 6 de-risk reasons (security, IP, local presence, overlap, senior teams, no overruns) | `Sections.Why` |
| 05 | **Industries** | Capability | 6 vertical entry points | `Sections.Industries` |
| 06 | **Process** | Capability | 4 steps framed as "how we de-risk delivery" | `Sections.Process` |
| 07 | **Tech stack** | Capability | category → chips credibility grid | `Sections.TechStack` |
| 08 | **Testimonials** | Social proof | 3 quotes + Clutch/Google badges | `Sections.Testimonials` |
| ★ | **Certifications & Partners** | Social proof | TÜV/ISO/Odoo/Google/Salesforce/MS/Clutch/GPTW badge wall | `Sections.Partners` |
| 09 | **Resources/Blog** | Brand/expertise | 3 posts, expertise signal | `Sections.Resources` |
| ★ | **Events** | Brand/expertise | "Where you'll find us next" — real event photo cards | `Sections.Events` |
| ★ | **Culture / Life at Biztech** | Brand/expertise | Office-tour image + GPTW + careers CTA | `Sections.Culture` |
| — | **FAQ** | Objections | 5 Qs → FAQPage schema (time zones, IP, security, engagement, start time) | `Sections.Faq` |
| — | **Final CTA band** | Convert | "Book a 30-min call" + reassurance — LAST content before footer | `Sections.CTA` |
| — | **Footer** | — | nav + certs + offices | `Sections.Footer` |

## Facts the writer MUST use (no inventing)
Since 2006 · 1,200+ projects · 200+ team · 98% retention · ~80% senior engineers ·
ISO 27001 + 9001 · Microsoft Partner · Clutch 4.9 / Google 4.8 / 80+ reviews ·
IP transfer on payment + NDA · US/EU leads + India engineering + daily overlap ·
engagement models (dedicated / fixed-scope / staff aug) · start in 1–2 weeks.

## Voice / banned
Senior delivery lead voice — direct, proof-led, no hype. BAN: "Global Leader", "world-class",
"one-stop", "cutting-edge", "seamless", "unlock/elevate", rhetorical-question heroes, and AI tells
(delve, leverage, utilize, robust, holistic, comprehensive, game-changer).

## Internal links
`#services` `#work` `#why` `#industries` `#process` `#testimonials` `#resources` `#cta` `#faq`.
Primary target everywhere: `#cta`.
