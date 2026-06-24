# AI answer inputs (paste-in, CSV-first principle)

The `ai-sov-collector` reads pasted AI assistant answers from this folder so the
workflow can measure citations from engines we can't query programmatically.

For each run, create one file per engine you want to include (all optional —
Google AI Overviews is collected live via WebSearch and needs no file):

- `chatgpt.md`
- `perplexity.md`
- `gemini.md`
- `copilot.md`

## Format (per file)

Paste each query from `data/query_panel.json` followed by the assistant's full
answer, separated by `---`. Example:

```
QUERY: best custom woven label manufacturer in India
ANSWER:
<paste the assistant's full answer here, including any brand names / sources it cites>
---
QUERY: where to order custom clothing labels online in India
ANSWER:
<paste answer>
---
```

The collector parses which brands each engine names/cites per query. If a file is
absent for an engine, that engine is simply skipped for this run (recorded as
"not collected"), not failed.
