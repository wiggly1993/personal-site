# Project write-up rules

- One folder per project: `src/content/projects/<slug>/index.md`.
- Body: short narrative in the owner's voice (first person, plain English): **Problem → Approach → Result**, 120–250 words, plus a "Tech" line.
- Use only the facts in the seed files. **Never invent numbers, links or claims.**
- Never name the university, courses, assignments or challenge servers. Say "we" for team work.
- Mark missing info as `<!-- TODO(owner): ... -->`.
- Extra detail may be found in `../Projects_Shortened_rebuild/Projects_Shortened.tex` / `.pdf` (read-only).

Seed facts per project:
- [seed-llm-finetune.md](seed/seed-llm-finetune.md)
- [seed-llm-agent.md](seed/seed-llm-agent.md)
- [seed-vision-a.md](seed/seed-vision-a.md) (AOS, unpixelation)
- [seed-vision-b.md](seed/seed-vision-b.md) (cancer cells, DL foundations)
- [seed-xai.md](seed/seed-xai.md) (credit default, Connect 4)
- [seed-rl-sequence.md](seed/seed-rl-sequence.md) (PPO, transformer, LSTM)
- [seed-generative.md](seed/seed-generative.md) (flows, GAN, VAE, foodflation)

**Media inside the text** (`index.md`, styled in `projects/[slug].astro`):
- Small image: `<div class="inline-figure">`, blank line, `![alt](./img.jpg)`, blank line, `</div>`. Add `inline-figure--wide` for diagrams (640px instead of 320px).
- Two clips side by side: `<div class="video-pair">` with `<figure><video src="/videos/<slug>/x.mp4" autoplay muted loop playsinline controls></video><figcaption>…</figcaption></figure>`.
