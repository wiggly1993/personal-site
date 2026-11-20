---
title: "Character-Level Transformer"
subtitle: "A small transformer that writes speeches one character at a time."
summary: "A character-level transformer with multi-head attention, trained on speech transcripts. Temperature trades creativity for predictability."
category: "Sequence Models"
tags: ["Transformer", "Multi-head attention", "Text generation"]
date: 2025-01-01 # TODO(owner): real date
order: 9
featured: false
theme: "light"
cover: "./transformer_architecture.png"
gallery:
  - src: "./transformer_architecture.png"
    caption: "Transformer block: input embedding plus positional encoding, multi-head attention, feed-forward."
---

## Problem

Transformers power today's language models. I wanted to build one myself, at the smallest useful scale: predicting text one character at a time.

## Approach

I implemented a character-level transformer with multi-head attention and trained it on transcripts of Donald Trump's speeches.

## Result

The model generates new text one character at a time. A temperature setting controls the style: low temperature gives predictable output, high temperature gives more creative output.

**Tech:** transformer · multi-head attention
<!-- TODO(owner): which framework? Add sample output or model size if available. -->
