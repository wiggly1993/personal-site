---
title: "Learning to Walk with PPO"
subtitle: "Teaching a two-legged robot to walk with Proximal Policy Optimization."
summary: "An actor-critic PPO agent learns continuous control in BipedalWalker over 3,000 episodes, with steadily rising rewards."
category: "Reinforcement Learning"
tags: ["PPO", "Actor-Critic", "Continuous control"]
date: 2025-01-01 # TODO(owner): real date
order: 8
featured: true
theme: "dark"
cover: "./ppo_training_process.png"
gallery:
  - src: "./ppo_training_process.png"
    caption: "The PPO loop: collect a dataset, update actor and critic, reset, repeat."
  - src: "./ppo_rewards.png"
    caption: "Episode reward over 3,000 episodes."
metrics:
  - value: "3,000"
    label: "episodes"
---

## Problem

BipedalWalker is a two-legged robot that has to learn to walk over rough ground. Its actions are continuous — how much torque to put on each joint — which makes it a hard control problem.

## Approach

I implemented Proximal Policy Optimization with an Actor (the policy) and a Critic (the value function). The training loop:

1. Collect transitions into a rollout buffer.
2. Train the Actor and the Critic for 5 epochs.
3. Compute advantages from the Critic's values and apply clipped policy-gradient updates.
4. Clear the buffer and repeat.

For continuous actions, the Actor outputs a mean and a variance. I trained for 3,000 episodes with 376 hidden units and a learning rate of 1e-5.

## Result

Episode rewards rise steadily, and the agent learns to walk.

<div class="video-pair">
  <figure>
    <video src="/videos/ppo-bipedal-walker/ppo_start.mp4" autoplay muted loop playsinline controls preload="metadata" aria-label="BipedalWalker after the first training attempts"></video>
    <figcaption>After the first attempts.</figcaption>
  </figure>
  <figure>
    <video src="/videos/ppo-bipedal-walker/ppo_final.mp4" autoplay muted loop playsinline controls preload="metadata" aria-label="BipedalWalker after the improved training process"></video>
    <figcaption>After improving the training process.</figcaption>
  </figure>
</div>

**Tech:** PPO · actor-critic · BipedalWalker
<!-- TODO(owner): which framework and environment library (Gym/Gymnasium?). -->
