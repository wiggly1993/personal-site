# Seed: reinforcement learning & sequence models

## ppo-bipedal-walker
Reinforcement Learning · featured · order 8 · dark
- BipedalWalker learns to walk with PPO.
- Loop: collect transitions into a rollout buffer → train Actor (policy) and Critic (value) for 5 epochs → advantages from Critic values, clipped policy-gradient updates → clear buffer, repeat.
- Actor outputs mean and variance for continuous actions.
- 3,000 episodes, 376 hidden units, learning rate 1e-5.
- Rewards rise; it walks.
- Metrics: 3,000 episodes. Source: owner's report + notebook (ext. SSD).
- From code: PyTorch, Gymnasium Box2D; 24-D state, 4 torques; MLPs 2×376, LayerNorm; softplus σ; buffer 4,048, batch 32; TD advantage, γ 0.99; clip 0.2; Huber value loss; loss weights (1, 1, 0.0015); Adam; ONNX.
- Plot reward −100 → +100 (400-step training episodes). Report's ~300 score omitted (mismatch).

## transformer-text-generation
Sequence Models · order 9
- Character-level GPT (PyTorch) on Trump speech transcripts.
- Code: 40-char vocab, context 64; 4 pre-LN blocks, 128 hidden, 4 heads; weight tying; AdamW, cosine LR 1e-3→1e-4; prompt "the president", temps 0.01–5.0. No loss/sample.

## lstm-text-generation
Sequence Models · order 10
- Character-level LSTM: next-character prediction, text generation, and predictions used for text compression.
