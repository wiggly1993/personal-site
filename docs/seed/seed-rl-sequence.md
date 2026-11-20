# Seed: reinforcement learning & sequence models

## ppo-bipedal-walker
Reinforcement Learning · featured · order 8 · dark
- Teaching BipedalWalker to walk with Proximal Policy Optimization.
- Loop: collect transitions into a rollout buffer → train Actor (policy) and Critic (value) for 5 epochs → advantages from Critic values, clipped policy-gradient updates → clear buffer, repeat.
- Actor outputs mean and variance for continuous actions.
- 3,000 episodes, 376 hidden units, learning rate 1e-5.
- Episode rewards rise steadily; the agent learns to walk.
- Metrics: 3,000 episodes. Reference code may be in `../DRL/` (read-only).

## transformer-text-generation
Sequence Models · order 9
- Character-level transformer with multi-head attention trained on Trump speech transcripts.
- Generates text one character at a time; temperature controls creative vs predictable output.

## lstm-text-generation
Sequence Models · order 10
- Character-level LSTM for next-character prediction and text generation, plus using its predictions to build better codes for text compression.
