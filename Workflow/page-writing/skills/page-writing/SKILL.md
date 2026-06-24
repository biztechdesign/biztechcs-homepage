# /page-writing

Writes a complete, publish-ready **website page** for Labelwala.store — ANY page type — in the Labelwala voice, humanized and SEO/schema-checked. One flexible pipeline; the `page_type` field drives the structure. Pulls competitor-analysis findings in as input when available.

## Trigger
`/page-writing`

### Flags
| Flag | Action |
|---|---|
| `/page-writing` | Pick next `queued` request from `data/page_requests.json`, run all phases |
| `/page-writing --page "<title>" --type <page_type>` | Inject a one-off page request (page_type required) |
| `/page-writing --brief-only` | Phases 0–1 only — produce the brief for review |
| `/page-writing --from-brief output/briefs/SLUG_brief.md` | Skip research, start at writing |
| `/page-writing --seo-only output/drafts/SLUG_humanized.md` | Re-run the SEO + schema audit only |
| `/page-writing --report-only` | Rebuild final from existing humanized draft + SEO report |

## Supported page types (one workflow, not many)
`segment` · `service` · `product` · `landing` · `homepage` · `about` · `category` · `comparison`
The researcher selects a section blueprint + schema type per `page_type`; the writer follows it.

---

## Pipeline
```
Phase 0  Select request (data/page_requests.json) → lock in_progress
Phase 1  page-researcher  → output/briefs/SLUG_brief.md   (+ pulls competitor-analysis data if present)
Phase 2  page-writer      → output/drafts/SLUG_draft.md
Phase 3  page-humanizer   → output/drafts/SLUG_humanized.md  (AI-tells + page-fluff)
Phase 4  page-seo-checker → output/drafts/SLUG_seo_report.md (SEO + JSON-LD schema + CTAs)
Phase 5  assembly         → output/SLUG_final.md  ← PUBLISH (incl. JSON-LD)
Phase 6  records          → page_requests.json + published_pages.json
```

## Competitor-analysis integration
If the competitor-analysis workflow has been run, the researcher automatically reads and uses:
- `competitor-analysis/output/comparison_table.md`
- `competitor-analysis/output/content_strategy.md`
- `competitor-analysis/data/seo_gaps.json`

If absent, it does its own research and proceeds. Either way the final file records `Competitor-analysis inputs used: yes/no`.

## Data flow
| File | Written by | Read by |
|---|---|---|
| `data/page_requests.json` | user (queue) + orchestrator (status) | Phase 0 |
| `output/briefs/SLUG_brief.md` | page-researcher | writer, seo-checker, orchestrator |
| `output/drafts/SLUG_draft.md` | page-writer | humanizer |
| `output/drafts/SLUG_humanized.md` | page-humanizer | seo-checker, orchestrator |
| `output/drafts/SLUG_seo_report.md` | page-seo-checker | orchestrator (Phase 5) |
| `output/SLUG_final.md` | orchestrator | user → publish |
| `data/published_pages.json` | orchestrator (Phase 6) | cross-link / reporting |

## Quality gates
| Gate | Condition | If failed |
|---|---|---|
| Brief exists | non-empty brief | request → failed, stop |
| Draft exists | non-empty draft | request → failed, stop |
| Humanization | >30% flagged | warn, continue |
| SEO score | ≥ 60 | continue (+ surface manual fixes) |
| SEO score | < 60 | **HALT** → request → failed, stop |

## Page status lifecycle
`queued → in_progress → published`, or `→ failed` on any halt (with `failure_reason`). A request is **never left `in_progress`**. Retry a failed request by resetting its status to `queued`. Full definition in `agents/page-orchestrator.md`.

## What makes the output good
- **Any page type** from one workflow (blueprint + schema chosen per `page_type`).
- **Labelwala voice** + conversion focus (benefit-led, specific CTAs, proof not adjectives).
- **Humanized** — strips AI-tells *and* page marketing-fluff ("world-class", "one-stop solution", "elevate your brand").
- **Schema-ready** — emits JSON-LD (Product/Service/FAQPage/Organization) for the page `<head>`.
- **Wired to research** — reuses competitor-analysis gaps + existing blogs for internal links.

## Adding a page request
Add to `data/page_requests.json`:
```json
{
  "id": "url-slug",
  "title": "Page Title",
  "page_type": "segment | service | product | landing | homepage | about | category | comparison",
  "target_url": "/url-slug",
  "target_keyword": "primary keyword",
  "audience_segment": "clothing-brands | garment-manufacturers | institutions | general",
  "primary_goal": "what this page must achieve",
  "primary_cta": "the exact CTA text",
  "priority": 4,
  "status": "queued",
  "added_date": "YYYY-MM-DD",
  "started_at": "", "published_at": "", "output_file": "",
  "notes": "angle / structure hints"
}
```
Then run `/page-writing`.
