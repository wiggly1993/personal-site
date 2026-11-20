---
title: "Cancer Cell Line Classification"
subtitle: "Telling 9 cancer cell lines apart from fluorescence microscopy."
summary: "A pre-trained Wide ResNet-101-2 classifies 9 cancer cell lines from multi-channel fluorescence microscopy images."
category: "Computer Vision"
tags: ["Wide ResNet", "Transfer learning", "Class imbalance", "Microscopy"]
date: 2025-01-01 # TODO(owner): real date
order: 5
featured: false
theme: "light"
cover: "./cancer_cell_lines.jpg"
gallery:
  - src: "./cancer_cell_lines.jpg"
    caption: "Overview of cancer types across the human body."
---

## Problem

Fluorescence microscopy produces multi-channel images of cells — here with blue, red and yellow channels. The task was to classify which of 9 cancer cell lines each image shows.

## Approach

I started from a pre-trained Wide ResNet-101-2 and replaced its head with a custom classifier. The classes were imbalanced, so I upsampled the rarer cell lines during training.

## Result

<!-- TODO(owner): the slide says "best in class accuracy"; give the actual number or rank (for example a course challenge leaderboard). -->

**Tech:** Wide ResNet-101-2 · transfer learning · upsampling for class imbalance
<!-- TODO(owner): which framework did you use (PyTorch?). -->
