---
title: "GANs & Adversarial Examples"
subtitle: "A generator learns to fool a discriminator — and I learn to fool classifiers."
summary: "A GAN on MNIST where a generator learns to fool a discriminator, plus projected-gradient-ascent adversarial examples that fool classifiers."
category: "Generative Models"
tags: ["GAN", "Adversarial examples", "Projected gradient ascent", "MNIST"]
date: 2025-01-01 # TODO(owner): real date
order: 12
featured: false
theme: "light"
cover: "./gans_neural_networks.png"
gallery:
  - src: "./gans_neural_networks.png"
    caption: "The generator turns random noise into fake digits; the discriminator judges real versus fake."
---

## Problem

Generative adversarial networks learn by competition. I wanted to build one, and also to see the other side of "adversarial": how easily a trained classifier can be fooled.

## Approach

On MNIST, I set up the min-max game. A discriminator learns to separate real digits from fakes. A generator — a decoder that maps latent vectors to images — learns to fool it.

Separately, I used projected gradient ascent to craft adversarial examples: inputs changed just enough to make a classifier get them wrong.

## Result

The generator learns to produce digits that fool the discriminator, and the adversarial examples fool classifiers.

**Tech:** GAN · projected gradient ascent
<!-- TODO(owner): which framework did you use? -->
