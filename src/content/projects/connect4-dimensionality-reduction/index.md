---
title: "Mapping Connect 4"
subtitle: "Compressing thousands of game states into pictures you can read."
summary: "UMAP and t-SNE project 42-dimensional Connect 4 board states to 2D, revealing how games evolve and who wins."
category: "Explainable AI & Data Viz"
tags: ["UMAP", "t-SNE", "Dimensionality reduction", "Data visualization"]
date: 2025-01-01 # TODO(owner): real date
order: 7
featured: false
theme: "light"
cover: "./connect4_tsne.png"
gallery:
  - src: "./connect4_umap.png"
    caption: "UMAP: how game complexity changes with the turn number."
  - src: "./connect4_tsne.png"
    caption: "t-SNE trajectories of individual games, coloured by winner."
---

## Problem

A Connect 4 board has 42 positions, so every game state is a point in a 42-dimensional space. That is impossible to look at directly. I wanted to see how games unfold.

<div class="inline-figure">

![A Connect 4 board: 7 columns by 6 rows of red and yellow discs](./connect4.jpg)

</div>

## Approach

I recorded thousands of moves from games between an AI player and a random player. Each state is the full 42-position board. I then used UMAP and t-SNE to compress these states down to two dimensions.

## Result

The two methods tell different stories. UMAP shows how the complexity of the game changes over time. t-SNE draws each game as a trajectory, coloured by the winner, so you can follow game paths and see where they end up.

**Tech:** UMAP · t-SNE
