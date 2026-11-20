---
title: "Variational Autoencoder"
subtitle: "A smooth latent space you can sample new images from."
summary: "A VAE with the reparameterization trick and a KL-regularized latent space. Sample from the prior, decode, get new images."
category: "Generative Models"
tags: ["VAE", "Reparameterization trick", "KL divergence"]
date: 2025-01-01 # TODO(owner): real date
order: 13
featured: false
theme: "light"
---

## Problem

A plain autoencoder compresses images, but its latent space has gaps, so you can't sample new images from it. A variational autoencoder fixes that.

## Approach

The encoder predicts a mean and a log-variance for each input instead of a single point. The reparameterization trick makes this sampling step differentiable, so the whole model trains end to end. A KL term keeps the latent space close to a standard normal distribution, N(0, I).

## Result

Because the latent space stays near N(0, I), I can sample from the prior and decode it to get new images.

**Tech:** VAE · reparameterization trick
<!-- TODO(owner): which framework and dataset?. -->
