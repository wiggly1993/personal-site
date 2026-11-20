---
title: "Fine-Tuning a 7B LLM for Code Editing"
subtitle: "Teaching Qwen2.5-Coder-7B to pass Aider's Polyglot benchmark."
summary: "QLoRA fine-tuning of Qwen2.5-Coder-7B on 2,777 test-verified synthetic tasks. Well-formed diffs rose from 49% to 75%."
category: "LLMs & Agents"
tags: ["QLoRA", "Unsloth", "Synthetic data", "Qwen2.5-Coder", "DeepSeek API", "Vast.ai", "Aider"]
date: 2025-01-01 # TODO(owner): real date
order: 1
featured: true
theme: "dark"
metrics:
  - value: "49% → 75%"
    label: "well-formed diffs"
  - value: "2,777"
    label: "verified samples"
  - value: "6"
    label: "languages"
---

## Problem

I wanted a 7B open model that could solve coding exercises in six languages and pass Aider's Polyglot benchmark. Off the shelf, it often failed to produce edits in the format Aider expects.

## Approach

I built my own training data. Using the DeepSeek API and a custom prompt, I generated 3,000 Exercism-style tasks, each with a stub, a solution, tests and a plan.

Then I wrote a test harness that executes every sample in its own language. A sample was kept only if its tests pass on the solution *and* fail on the stub. That left 2,777 verified samples.

For training I used QLoRA (4-bit, rank 16) with Unsloth on rented Vast.ai GPUs, and wrapped every input in Aider's real prompt layout so the model learned the exact format it would see at evaluation time.

## Result

Well-formed diffs rose from **49% to 75%**. Earlier runs trained on commit data had failed.

<!-- TODO(owner): the slide sentence is cut off ("…which"); finish the lesson learned. -->

**Tech:** Qwen2.5-Coder-7B · QLoRA · Unsloth · DeepSeek API · Vast.ai · Aider Polyglot
