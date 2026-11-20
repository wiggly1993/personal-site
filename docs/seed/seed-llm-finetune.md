# Seed: llm-finetune-code-editing

LLMs & Agents · featured · order 1 · dark

Fine-tuning Qwen2.5-Coder-7B for code editing (Aider Polyglot).
- Goal: teach a 7B open model to solve coding exercises in 6 languages and pass Aider's Polyglot benchmark.
- Synthetic data: DeepSeek API generated 3,000 Exercism-style tasks (stub, solution, tests, plan) from a custom prompt.
- Test harness: every sample executed in its language; kept only if the tests pass and the stub fails → 2,777 verified samples.
- Training: QLoRA (4-bit, rank 16) with Unsloth on rented Vast.ai GPUs, inputs wrapped in Aider's real prompt layout.
- Result: well-formed diffs rose 49% → 75%. Earlier runs on commit data failed.
- TODO(owner): the slide sentence is cut off ("…which"); finish the lesson learned.

Metrics: 49% → 75% well-formed diffs · 2,777 verified samples · 6 languages.
