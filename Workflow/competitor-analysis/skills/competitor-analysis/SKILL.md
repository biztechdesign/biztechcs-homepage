# /competitor-analysis

Runs the full 13-phase competitor analysis pipeline for Labelwala.store. All phases are chained automatically — output of each phase feeds the next with no manual steps.

## Trigger
Invoke with: `/competitor-analysis`

Optional flags:
- `/competitor-analysis --quick` — Runs Phases 0–6 only (audit + research + scoring + SEO + SOV + table). Skips content strategy, matrix, digest, PDF, and cron setup.
- `/competitor-analysis --refresh` — Re-runs Phases 1–3 + 5 only (competitor re-research + re-score + SOV re-check). Diffs against previous snapshot and generates a fresh weekly digest.
- `/competitor-analysis --report-only` — Skips research phases, regenerates PDF + digest from existing data files.

---

## Pipeline

```
Phase 0: /labelwala-audit
    ↓ data/labelwala_baseline.json
Phase 1: Identify competitors
    ↓ data/competitor_profiles.json (stub entries)
Phase 2: /competitor-research (parallel × N competitors)
    ↓ data/competitor_profiles.json (fully populated)
Phase 3: Score competitors
    ↓ threat_score added to each profile
Phase 4: /seo-gap-analysis
    ↓ data/seo_gaps.json
Phase 5: /ai-sov-check
    ↓ data/ai_sov.json
Phase 6: Build comparison table
    ↓ output/comparison_table.md
Phase 7: Synthesize social + review signals
    ↓ output/content_strategy.md (Market Signals section)
Phase 8: Predictive next-move flagging
    ↓ predicted_next_move added to each profile
Phase 9: Build content strategy doc
    ↓ output/content_strategy.md (complete)
Phase 10: Build opportunity matrix
    ↓ output/opportunity_matrix.md
Phase 11: Generate weekly digest
    ↓ output/weekly_digest.md
Phase 12: Assemble + export PDF report
    ↓ output/report_YYYY-MM.pdf
Phase 13: Schedule tiered monitoring
    ↓ /schedule cron jobs registered
```

---

## Phase Details

### Phase 0 — Labelwala Self-Audit
Spawn `labelwala-auditor` agent.
- Input: `{ "url": "https://labelwala.store" }`
- Output: `data/labelwala_baseline.json`
- Gate: Do not proceed to Phase 1 until file is written and non-empty.

### Phase 1 — Identify Competitors
Use `competitor-analyzer` orchestrator to run WebSearch queries and build initial competitor list.
- Output: `data/competitor_profiles.json` with stub entries (name + url + category only)

### Phase 2 — Parallel Competitor Research
For each competitor in `data/competitor_profiles.json`, spawn one `competitor-researcher` agent simultaneously.
- Output: each agent updates its entry in `data/competitor_profiles.json`
- Gate: Wait for all agents to set `researched_at` field before proceeding.

### Phase 3 — Scoring
`competitor-analyzer` reads all profiles and calculates `threat_score` per competitor.
- Output: `threat_score` fields written to `data/competitor_profiles.json`

### Phase 4 — SEO Gap Analysis
`competitor-analyzer` runs 20+ WebSearch queries and classifies keywords.
- Output: `data/seo_gaps.json`

### Phase 5 — AI Share of Voice
Spawn `ai-sov-checker` agent.
- Output: `data/ai_sov.json`

### Phase 6 — Comparison Table
`competitor-analyzer` reads profiles + baseline and builds markdown table.
- Output: `output/comparison_table.md`

### Phase 7 — Social & Review Synthesis
`competitor-analyzer` aggregates complaint/praise patterns from all profiles.
- Output: appended to `output/content_strategy.md` (Market Signals section)

### Phase 8 — Predictive Flagging
`competitor-analyzer` writes `predicted_next_move` per competitor + early warnings section.
- Output: updated `data/competitor_profiles.json` + section in `output/comparison_table.md`

### Phase 9 — Content Strategy Doc
`competitor-analyzer` builds full content strategy using SEO gaps + SOV + signals.
- Output: `output/content_strategy.md` (complete)

### Phase 10 — Opportunity Matrix
`competitor-analyzer` classifies all recommendations into 2×2 grid.
- Output: `output/opportunity_matrix.md`

### Phase 11 — Weekly Digest
`competitor-analyzer` generates 1-page email-ready summary.
- Output: `output/weekly_digest.md`

### Phase 12 — PDF Report
`competitor-analyzer` populates `templates/report_template.md` then invokes `pdf` skill.
- Output: `output/report_YYYY-MM.pdf`

### Phase 13 — Cron Monitoring
`competitor-analyzer` calls `/schedule` to register:
- Daily scan (high-priority signals)
- Weekly digest re-run
- Monthly full re-run with versioned snapshot

---

## Data Flow Summary

| File | Written By | Read By |
|---|---|---|
| `data/labelwala_baseline.json` | labelwala-auditor | competitor-analyzer (Phase 6, 9) |
| `data/competitor_profiles.json` | competitor-researcher × N | competitor-analyzer (Phase 3, 6, 7, 8) |
| `data/seo_gaps.json` | competitor-analyzer (Phase 4) | competitor-analyzer (Phase 9, 10) |
| `data/ai_sov.json` | ai-sov-checker | competitor-analyzer (Phase 9, 11) |
| `output/comparison_table.md` | competitor-analyzer (Phase 6, 8) | PDF skill (Phase 12) |
| `output/content_strategy.md` | competitor-analyzer (Phase 7, 9) | PDF skill (Phase 12) |
| `output/opportunity_matrix.md` | competitor-analyzer (Phase 10) | PDF skill (Phase 12) |
| `output/weekly_digest.md` | competitor-analyzer (Phase 11) | User / email |
| `output/report_YYYY-MM.pdf` | pdf skill (Phase 12) | User |

---

## Versioning & Monitoring Snapshots

After each full run, the orchestrator saves:
```
data/competitor_profiles_YYYY-MM.json   ← versioned snapshot
data/seo_gaps_YYYY-MM.json             ← versioned snapshot
```

On `--refresh` runs, the orchestrator diffs the new profiles against the latest versioned snapshot and highlights changes in `output/weekly_digest.md`.

---

## Error Handling

- If a competitor URL is unreachable: mark `"status": "unreachable"` in the profile, skip scoring, continue with remaining competitors.
- If `data/labelwala_baseline.json` write fails: abort and alert user — baseline is required before proceeding.
- If fewer than 3 competitors are identified: alert user and ask if they want to expand search terms or proceed with fewer.
- If `pdf` skill is unavailable: save report as `output/report_YYYY-MM.md` and notify user to export manually.
