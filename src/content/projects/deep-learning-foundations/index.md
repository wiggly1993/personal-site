---
title: "Deep Learning Foundations"
subtitle: "A collection of smaller CNN projects and the tooling around them."
summary: "Transfer learning on CIFAR-10, ResNet-style skip connections, mobile CNNs under 30K parameters, and solid training tooling."
category: "Computer Vision"
tags: ["CNN", "VGG", "ResNet", "Transfer learning", "CIFAR-10", "TensorBoard", "Hyperparameter search"]
date: 2025-01-01 # TODO(owner): real date
order: 14
featured: false
theme: "light"
cover: "./cnns.png"
gallery:
  - src: "./cnns.png"
    caption: "A classic CNN: convolutions and subsampling build feature maps, then fully connected layers."
  - src: "./depth_conv.png"
    caption: "Depthwise separable convolution: a k×k conv per channel, then a 1×1 pointwise conv. Used in the mobile CNNs."
---

## Problem

Before the bigger projects, I needed solid fundamentals: how to adapt existing architectures, train deeper networks, build small efficient models, and keep experiments under control.

## Approach

This is a collection of smaller CNN projects:

- **Transfer learning:** a modified VGG plus ImageNet-pre-trained models on CIFAR-10, with layer freezing for faster training.
- **Deeper networks:** ResNet-style skip connections.
- **Mobile CNNs:** lightweight models using separable convolutions plus attention, with under 30K parameters.
- **Training tooling:** TensorBoard, progress bars, checkpointing and hyperparameter search.

## Result

<!-- TODO(owner): add results (e.g. CIFAR-10 accuracy of the mobile CNN). -->

**Tech:** VGG · ResNet · CIFAR-10 · TensorBoard
<!-- TODO(owner): which framework did you use? -->
