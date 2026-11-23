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

Pixelation hides part of an image. I wanted a network that can restore it, without anyone having to label training data by hand. This is an ill-posed inverse problem: many different originals produce the same pixelated block, so the model has to learn what natural images usually look like.

## Approach

The trick is that the training data labels itself. We collected around 35,000 photos ourselves. I converted them to grayscale, resized them to 64×64 and pixelated a random rectangle in each one (4–32 px per side), replacing it with block averages of 4–16 px. The original pixels become the ground truth, so every image is a free training pair.

I built the whole pipeline from scratch in PyTorch: preprocessing, a custom dataset with seeded random pixelation, batching and the training loop. The model is deliberately simple: a fully convolutional network with 9 layers of 3×3 kernels, 128 channels, batch normalization and ReLU. Same-padding keeps the output at full resolution, so the network predicts a value for every pixel. Stacking nine 3×3 layers gives each output pixel a 19×19 receptive field, enough context to combine the coarse block averages with the visible structure around them.

The loss is a masked MSE: it only counts the pixels that were hidden, so the network spends its capacity on reconstruction instead of copying the visible part. I trained with Adam on an 80/20 train/validation split on an Apple Silicon GPU, with checkpoints every epoch and early stopping on validation loss.

## Result

The network unpixelates images it has never seen. The final benchmark was 6,635 unseen pixelated images, scored by RMSE against baseline models.

**Tech:** Python · PyTorch · NumPy · fully convolutional CNN · masked MSE · self-supervised image restoration
<!-- TODO(owner): add your RMSE / benchmark result if you remember it. -->
