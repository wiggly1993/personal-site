# Seed: generative models (+ drafts)

## normalising-flows
Generative Models · order 11
- MNIST digits flattened to 784-D. Invertible coupling layers, change-of-variables formula, trained by maximum likelihood (NLL with Jacobian log-determinants).
- Sample a Gaussian, invert through the flow, get new digits.
- PyTorch. Jacobian checked with autograd. 5 additive coupling layers (halves swapped each layer, log-det = 0), conditioner MLP 392→256→392, Adam lr 1e-3, 9 epochs. No score.

## gan-mnist
Generative Models · order 12
- Min-max game on MNIST: a discriminator separates real digits from fakes; a generator (decoder from latent vectors) learns to fool it.
- Also projected-gradient-ascent adversarial examples that fool classifiers.
- PyTorch. PGA with gradient sign in an epsilon-ball on a small CNN. Bridge: discriminator vs. noise fakes updated by the attack each epoch. GAN: transposed-conv generator (64-D latent), conv discriminator, non-saturating G loss, D grads zeroed on G step, Adam lr 2e-3 (G) / 2e-4 (D), 35 epochs. No score.

## vae-generative-modeling
Generative Models · order 13
- Encoder predicts mean and log-variance; reparameterization trick for end-to-end training; KL term keeps the latent space near N(0, I); sample from the prior and decode to get new images.
- PyTorch, MNIST. Path: Zeiler-Fergus style undo (transposed conv, max-unpool) on pre-trained AlexNet → conv AE (2 conv + avg pool, transposed-conv decoder, MSE) → FC VAE 784→400→20-D latent, MSE + 0.015·KL, Adamax, 10 epochs. No score.

## foodflation
draft: true · TODO(owner)
- foodflation.io: Austrian grocery price comparison (in progress). Write it up when ready.
