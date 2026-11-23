---
title: "Mapping Connect 4"
subtitle: "Compressing thousands of game states into pictures you can read."
summary: "t-SNE, UMAP and PCA project 42-dimensional Connect 4 board states to 2D, revealing how games evolve and how a trained agent wins."
category: "Explainable AI & Data Viz"
tags: ["UMAP", "t-SNE", "PCA", "Dimensionality reduction", "Data visualization", "Deep Q-Network"]
date: 2025-01-01 # TODO(owner): real date
order: 7
featured: false
theme: "light"
cover: "./connect4_tsne.png"
gallery:
  - src: "./connect4_umap.png"
    caption: "UMAP coordinate per turn: board states fan out in the first moves, then converge as the board fills up."
  - src: "./connect4_tsne.png"
    caption: "t-SNE game paths. Blue: the trained agent against a random player, with its fixed opening and wins clustered at the bottom. Green: two random players, spread out."
---

## In short

We let a trained Connect 4 AI play thousands of games against a random player and recorded every board. Then we squeezed each board into a single dot on a 2D map, so a whole game becomes a path you can follow. The maps show how games unfold, and how the AI wins.

## Problem

A Connect 4 board has 42 positions, so every game state is a point in a 42-dimensional space. That is impossible to look at directly. We wanted to see how games unfold and what strategy the AI actually follows.

<div class="inline-figure">

![A Connect 4 board: 7 columns by 6 rows of red and yellow discs](./connect4.jpg)

</div>

## Approach

We generated our own dataset. A pre-trained Deep Q-Network agent played 1,000 games against a random player, and two random players played another 1,000 as a baseline. For every turn we stored the board, the move, the agent's Q-values and the outcome.

Each board is a 42-dimensional vector (empty, player 1, player 2). For the combined dataset we one-hot encoded every cell, so the distance between two boards counts how many cells differ. We then compared three projections:
- **t-SNE** (perplexity 30) for local neighbourhoods
- **UMAP** (15 neighbours, min. distance 0.1) to preserve more global structure
- **PCA** as a linear baseline

Connecting consecutive states turns each game into a trajectory. We coloured the points by turn, game phase and winner, and built interactive Plotly/Dash versions that show the actual board when you hover over a point.

## Result

- **Games fan out, then converge.** Board states spread widely in the first few turns, then narrow again as the board fills up.
- **The AI has a fixed strategy.** It always opens in the same column and steers games into a few familiar configurations, where it wins most of them.
- **Random play is diffuse.** Random-vs-random games scatter across the map and wins are split evenly. Even linear PCA cleanly separates them from the AI's games.

**Tech:** Python · pandas · scikit-learn (t-SNE, PCA) · UMAP · Plotly/Dash · Altair
