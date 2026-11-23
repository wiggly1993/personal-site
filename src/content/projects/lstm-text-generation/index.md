---
title: "LSTM Text Generation & Compression"
subtitle: "Predicting the next character — and using that to compress text."
summary: "A character-level LSTM for next-character prediction and text generation, whose predictions also build better codes for compression."
category: "Sequence Models"
tags: ["LSTM", "Text generation", "Compression"]
date: 2025-01-01 # TODO(owner): real date
order: 10
featured: false
theme: "light"
cover: "./lstm.png"
gallery:
  - src: "./lstm.png"
    caption: "An LSTM cell: forget, input and output gates control the cell state (memory) and the hidden state."
---

## Problem

A model that predicts the next character well knows a lot about the structure of text. I wanted to use that knowledge twice: to generate text, and to compress it.

## Approach

I trained a character-level LSTM for next-character prediction. Generation comes from sampling its predictions one character at a time. For compression, I used its predictions to build better codes for the text.

## Result

<!-- TODO(owner): add a result (e.g. compression ratio vs. a baseline, or sample output). -->

**Tech:** LSTM
<!-- TODO(owner): which framework did you use? -->
