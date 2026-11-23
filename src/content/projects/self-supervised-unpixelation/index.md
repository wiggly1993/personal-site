---
title: "Self-Supervised Unpixelation"
subtitle: "A CNN that restores pixelated images — trained without a single label."
summary: "A 9-layer CNN that removes pixelation from grayscale images. The original pixels are the ground truth, so no labelled data is needed."
category: "Computer Vision"
tags: ["CNN", "PyTorch", "Self-supervised learning", "Image restoration"]
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

Pixelation hides part of an image. I wanted a network that can restore it, without anyone having to label training data by hand. This was the final project of the *Programming in Python II* course at JKU Linz (2023).

## Approach

The trick is that the training data labels itself. The course pooled around 35,000 photos taken by the students, including mine. I converted them to grayscale, resized them to 64×64 and pixelated a random rectangle in each one. The original pixels become the ground truth.

I built the whole pipeline step by step over the semester: preprocessing, a PyTorch dataset, the model and the training loop. The model is deliberately simple: a 9-layer CNN with 128 channels, not a U-Net. The loss only counts the pixels that were hidden.

## Result

The network unpixelates images it has never seen. The final test was 6,635 unseen pixelated images, scored on the course's challenge server against baseline models.

**Tech:** Python · PyTorch · NumPy · CNN · self-supervised image restoration
<!-- TODO(owner): add your challenge-server RMSE / leaderboard result if you remember it. -->
