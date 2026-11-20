---
title: "Seeing Through the Forest"
subtitle: "Finding people hidden under trees with drone-based Airborne Optical Sectioning."
summary: "A self-supervised U-Net-style autoencoder (18.7M parameters) that removes forest occlusion from drone focal stacks to reveal hidden people."
category: "Computer Vision"
tags: ["U-Net", "Autoencoder", "Self-supervised learning", "Image restoration"]
date: 2025-01-01 # TODO(owner): real date
order: 3
featured: true
theme: "dark"
cover: "./aos_unet_architecture.png"
gallery:
  - src: "./aos_unet_architecture.png"
    caption: "U-Net-like encoder–decoder with skip connections."
  - src: "./aos_high_contrast.png"
    caption: "High-contrast scene: three focal-stack inputs, the network's output and the ground truth."
  - src: "./aos_low_contrast.png"
    caption: "Low-contrast scene: the person is still recovered."
  - src: "./aos_heavily_occluded.png"
    caption: "Heavily occluded scene: almost nothing visible in the inputs."
metrics:
  - value: "30,000"
    label: "focal stacks"
  - value: "18.7M"
    label: "parameters"
---

## Problem

From a drone, a person standing in a forest is mostly hidden by leaves and branches. Airborne Optical Sectioning (AOS) combines many aerial shots into images focused at different heights, but the occlusion is still there. I wanted a network that removes it.

## Approach

I worked with a dataset of 30,000 simulated focal stacks, each focused at 0 m, 1 m and 2 m. The network takes these 3 images at a time.

The model is a U-Net-like CNN autoencoder with skip connections and 18.7M parameters. Training is self-supervised: the ground-truth images serve as restoration targets, so no manual labels are needed.

## Result

The network successfully removes the occlusion and reveals the people hidden underneath — in high-contrast, low-contrast and heavily occluded scenes.

**Tech:** U-Net-style autoencoder · self-supervised image restoration
<!-- TODO(owner): which framework did you use (PyTorch?). -->
