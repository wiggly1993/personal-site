# Seed: llm-agent-from-scratch

LLMs & Agents · featured · order 2 · light

A tool-calling LLM agent in plain Python, no frameworks.
- JSON tool calls (calculator, files, bash); bad JSON retried.
- Evaluation: golden tasks scored by an LLM judge, 100% accuracy.
- Context engineering: file offloading, todo plan, summaries → 60% fewer tokens.
- Sandboxed bash in Docker, sub-agents for parallel subtasks, KV-cache-friendly prompt layout.

Metrics: 100% golden-task accuracy · −60% tokens.
