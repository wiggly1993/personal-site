---
title: "An LLM Agent From Scratch"
subtitle: "A tool-calling agent in plain Python. No frameworks."
summary: "A tool-calling LLM agent in plain Python with sandboxed bash, sub-agents and context engineering. 100% on golden tasks, 60% fewer tokens."
category: "LLMs & Agents"
tags: ["Tool calling", "Context engineering", "LLM-as-judge", "Docker", "Sub-agents", "Python"]
date: 2025-01-01 # TODO(owner): real date
order: 2
featured: true
theme: "light"
cover: "./llm_agent_1.png"
gallery:
  - src: "./llm_agent_1.png"
    caption: "The agent loop: the LLM calls tools, results flow back into the context, and the context feeds the next LLM call."
metrics:
  - value: "100%"
    label: "golden-task accuracy"
  - value: "−60%"
    label: "tokens"
---

## Problem

Agent frameworks hide what actually happens between the model and its tools. I wanted to understand every step, so I built a tool-calling agent in plain Python, with no frameworks at all.

## Approach

The model calls tools through JSON: a calculator, file operations and bash. When it produces bad JSON, the agent retries. Bash runs sandboxed inside Docker, and the agent can spawn sub-agents to work on subtasks in parallel.

Most of the work went into context engineering. The agent offloads large content to files, keeps a todo plan, and summarizes as it goes. I also laid out the prompt so it stays KV-cache friendly.

To know whether it actually works, I evaluated it on a set of golden tasks scored by an LLM judge.

## Result

The agent reached **100% accuracy** on the golden tasks, and context engineering cut token usage by **60%**.

**Tech:** Python · JSON tool calling · Docker sandbox · sub-agents · LLM-as-judge evaluation
