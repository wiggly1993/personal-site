---
title: "Normalising Flows on MNIST"
subtitle: "Generating digits by inverting a learned, invertible transformation."
summary: "Invertible coupling layers trained by maximum likelihood on MNIST. Sample a Gaussian, invert through the flow, get new digits."
category: "Generative Models"
tags: ["Normalising flows", "Coupling layers", "Maximum likelihood", "MNIST"]
date: 2025-01-01 # TODO(owner): real date
order: 11
featured: false
theme: "light"
---

## Problem

Most generative models can sample new data but can't tell you how likely a given example is. Normalising flows can do both, because every step is invertible.

## Approach

I flattened MNIST digits into 784-dimensional vectors and built a flow from invertible coupling layers. Using the change-of-variables formula, the model is trained by maximum likelihood: it minimizes the negative log-likelihood, including the log-determinants of the Jacobians.

## Result

To generate a digit, I sample from a Gaussian and run it backwards through the flow. Out come new digits.

**Tech:** coupling layers · maximum-likelihood training
<!-- TODO(owner): which framework did you use? -->
