---
title: "Self-Supervised Unpixelation"
subtitle: "A CNN that restores pixelated images — trained without a single label."
summary: "A 9-layer CNN that removes pixelation from grayscale images. The original pixels are the ground truth, so no labelled data is needed."
category: "Computer Vision"
tags: ["CNN", "Self-supervised learning", "Image restoration"]
date: 2025-01-01 # TODO(owner): real date
order: 4
featured: true
theme: "light"
cover: "./pixelation_stacked.png"
gallery:
  - src: "./pixelation_stacked.png"
    caption: "Top: preprocessing converts photos to grayscale and pixelates a random region. Bottom: the CNN reconstructs the pixelated region."
---

## Problem

Pixelation hides part of an image. I wanted a network that can restore it — without anyone having to label training data by hand.

## Approach

The trick is that the training data labels itself. I converted images to grayscale and resized them to 64×64. Then I replaced random rectangular regions with block averages, which is exactly what pixelation does. The original pixels become the ground truth.

The model is deliberately simple: a 9-layer CNN with 128 channels — not a U-Net.

## Result

The network unpixelates images it has never seen before.

**Tech:** CNN · self-supervised image restoration
<!-- TODO(owner): which framework did you use (PyTorch?); add a quantitative result if you have one. -->
