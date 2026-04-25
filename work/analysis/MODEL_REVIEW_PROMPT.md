# MODEL_REVIEW_PROMPT

Use this as a copy-paste prompt for a fresh Pro 5.5 / GPT-5.6 review chat:

---
You are reviewing repo: `baddiecoder/exoape-motion-research`.

Context:
- This is a reverse-engineering + clean-room reconstruction effort for Exoape-style motion architecture.
- `/references` is immutable and contains captured production artifacts.
- Work artifacts are under `/work/analysis` and a minimal engine-only Nuxt spike is under `/work/prototype`.

Read first (in order):
1. `work/analysis/NEXT_CHAT_HANDOFF.md`
2. `work/analysis/READING_ORDER.md`
3. `work/analysis/exoape-engine-contract.md`
4. `work/analysis/transition-loader-truth-table.md`
5. `work/prototype/README.md`

Do NOT redo:
- broad inventories already completed
- constrained decompile attempts already completed
- engine-only prototype setup already completed

Focus your review on:
1. Is the current prototype architecture faithful to Exoape home/studio evidence?
2. What are the highest-risk mismatches vs source behavior?
3. Which targeted files/functions should be humanified next (narrow scope only)?
4. What minimal code edits should be made first to improve transition/menu/loading correctness?

Prioritization rule:
- prioritize Exoape home/studio validation first.
- do not generalize to Pixelflakes/Ottografie implementation yet.

Evaluation rules:
- classify every major claim as **exact / observed / inferred / unknown**.
- avoid false certainty.
- tie recommendations to concrete evidence files.

Deliverable format requested:
- Top 10 findings (ranked)
- Critical fixes (P0/P1/P2)
- Narrow humanify target plan
- Prototype validation checklist
---
