---
title: "Deep Learning Foundations"
subtitle: "A collection of smaller CNN projects and the tooling around them."
summary: "Transfer learning on CIFAR-10, ResNet-style skip connections, mobile CNNs under 30K parameters, and solid training tooling."
category: "Computer Vision"
tags: ["CNN", "VGG", "ResNet", "Transfer learning", "CIFAR-10", "TensorBoard", "Hyperparameter search", "PyTorch"]
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

## In short

A collection of smaller PyTorch projects that cover the basics behind everything else on this site: building and training networks, reusing pre-trained ones, going deeper with skip connections, and fitting a useful CNN into very few parameters.

## Problem

Before the bigger projects, I needed solid fundamentals: how to adapt existing architectures, train deeper networks, build small efficient models, and keep experiments under control.

## Approach

- **Basics:** fully connected and convolutional networks on MNIST, compared side by side.
- **Transfer learning:** an ImageNet-pre-trained VGG adapted to CIFAR-10. The feature extractor stays frozen and only a new classifier is trained.
- **Deeper networks:** pre-activation residual blocks, where the skip connection bypasses the activation for a cleaner gradient path.
- **Efficient CNNs:** a CIFAR-10 model under 30K parameters, built from depthwise separable convolutions, skip connections and squeeze-and-excitation layers that reweight each channel.
- **Training tooling:** a small trainer with progress bars, TensorBoard logging, checkpoints and hyperparameter search.

<div class="inline-figure inline-figure--wide">

![Depthwise separable convolution: a k×k conv per channel, then a 1×1 pointwise conv. Used in the mobile CNNs](./depth_conv.png)

</div>

## Result

A set of reusable building blocks and training tools that the later projects build on.

**Tech:** Python · PyTorch · VGG · residual networks · CIFAR-10 · TensorBoard
