# /blog-writing

Runs the full 7-phase blog writing pipeline for Labelwala.store. AI researches, briefs, writes, humanizes, and SEO-checks. Output is a publish-ready `.md` file that reads like a human wrote it.

## Trigger
Invoke with: `/blog-writing`

### Optional Flags

| Flag | What it does |
|---|---|
| `/blog-writing` | Picks next queued topic from `data/blog_topics.json`, runs all 7 phases |
| `/blog-writing --topic "your topic"` | Injects a custom topic, skips topic queue selection |
| `/blog-writing --brief-only` | Runs Phases 0–2 only — outputs brief for review before writing starts |
| `/blog-writing --from-brief output/briefs/SLUG_brief.md` | Skips research, starts at Phase 3 using existing brief |
| `/blog-writing --humanize-only output/drafts/SLUG_draft.md` | Runs Phase 4 only on an existing draft |
| `/blog-writing --seo-only output/drafts/SLUG_humanized.md` | Runs Phase 5 only on an existing humanized draft |
| `/blog-writing --report-only` | Regenerates final .md from existing draft + SEO report |

---

## Pipeline

```
Phase 0: Topic selection from data/blog_topics.json
    ↓ topic locked as in_progress
Phase 1+2: blog-researcher — keyword research + competitor audit + brief writing
    ↓ output/briefs/SLUG_brief.md
Phase 3: blog-writer — full article draft using brief + Labelwala voice profile
    ↓ output/drafts/SLUG_draft.md
Phase 4: blog-humanizer — AI-tell detection + rewriting
    ↓ output/drafts/SLUG_humanized.md (+ embedded audit report)
Phase 5: blog-seo-checker — keyword, meta, readability, internal links
    ↓ output/drafts/SLUG_seo_report.md
Phase 6: blog-orchestrator — final assembly with YAML frontmatter + SEO fixes
    ↓ output/SLUG_final.md ← PUBLISH THIS FILE
Phase 7: blog-orchestrator — update data/blog_topics.json + data/published_blogs.json
    ↓ records updated
```

---

## Data Flow

| File | Written by | Read by |
|---|---|---|
| `data/blog_topics.json` | User (queue) + orchestrator (status updates) | Orchestrator Phase 0 |
| `output/briefs/SLUG_brief.md` | blog-researcher | blog-writer, blog-seo-checker, orchestrator |
| `output/drafts/SLUG_draft.md` | blog-writer | blog-humanizer |
| `output/drafts/SLUG_humanized.md` | blog-humanizer | blog-seo-checker, orchestrator |
| `output/drafts/SLUG_seo_report.md` | blog-seo-checker | orchestrator |
| `output/SLUG_final.md` | orchestrator (Phase 6) | User → publish |
| `data/published_blogs.json` | orchestrator (Phase 7) | Cross-link research |

---

## Quality Gates

| Gate | Condition | Action if failed |
|---|---|---|
| Brief exists | `output/briefs/SLUG_brief.md` non-empty | Stop, report researcher failure |
| Draft exists | `output/drafts/SLUG_draft.md` non-empty | Stop, report writer failure |
| Humanization | `humanization_needed_percent > 30%` | Warn user, continue |
| SEO score | Score ≥ 60 | Continue + surface manual fixes |
| SEO score | Score < 60 | **HALT** — list critical issues, wait for user |

---

## What "Human-Written" Means in This Workflow

The blog-writer agent writes in the **Labelwala voice profile** — direct, practical, India-specific, opinionated, example-driven. The blog-humanizer then scans for 8 categories of AI-tell patterns and rewrites every flagged instance:

1. Robotic transitions (Furthermore, Moreover, Additionally, etc.)
2. Generic openers ("In today's world...", "Have you ever wondered...")
3. Passive voice clusters (3+ consecutive passive sentences)
4. Hedging language (triple hedges, "depending on various factors")
5. Symmetry tells (every section exactly 3 bullets, all same length)
6. Vocabulary tells (delve, leverage, utilize, seamless, robust, holistic, etc.)
7. Enthusiasm inflation (amazing, stunning, transformative, unlock)
8. Structure tells (Key Takeaways summary, Step 1/2/3 for non-sequential content)

A `clean` humanization status (0–10% flagged) is the target. `moderate` (10–25%) proceeds with a user warning. `heavy` (25%+) proceeds but is flagged for human review before publishing.

---

## Adding Topics to the Queue

Edit `data/blog_topics.json` and add an entry:

```json
{
  "id": "your-url-slug",
  "title": "Full topic title",
  "target_keyword": "primary keyword to rank for",
  "audience_segment": "clothing-brands | garment-manufacturers | institutions | general",
  "priority": 11,
  "status": "queued",
  "added_date": "YYYY-MM-DD",
  "started_at": "",
  "published_at": "",
  "output_file": "",
  "notes": "Any special angle or instruction"
}
```

Then run `/blog-writing` — the orchestrator picks the lowest priority number with `"status": "queued"`.

---

## Error Handling

- **No queued topics:** Stop and prompt user to add a topic
- **Brief file missing:** Stop and report researcher failure; re-run with `--brief-only` to debug
- **SEO score < 60:** Stop and list critical fixes; re-run with `--from-brief` after manual edits to the draft
- **pdf skill unavailable:** Final output stays as `.md`; notify user to export manually

**Topic status on failure:** any mid-pipeline halt sets the topic's `"status"` to `"failed"` in `blog_topics.json` (with `failure_reason`) — it is never left `in_progress`. To retry, reset that topic's status to `"queued"` and re-run. See the Topic Status Lifecycle in `agents/blog-orchestrator.md`.

---

## Output Checklist (pre-completion)

Before reporting success, orchestrator verifies:
- [ ] `output/briefs/SLUG_brief.md` — non-empty
- [ ] `output/drafts/SLUG_draft.md` — non-empty
- [ ] `output/drafts/SLUG_humanized.md` — non-empty
- [ ] `output/drafts/SLUG_seo_report.md` — score ≥ 60
- [ ] `output/SLUG_final.md` — non-empty with valid YAML frontmatter
- [ ] `data/blog_topics.json` — topic status set to "published"
- [ ] `data/published_blogs.json` — new entry appended
