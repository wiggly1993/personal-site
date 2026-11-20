# Seed: generative models (+ drafts)

## normalising-flows
Generative Models · order 11
- MNIST digits flattened to 784-D. Invertible coupling layers, change-of-variables formula, trained by maximum likelihood (NLL with Jacobian log-determinants).
- Sample a Gaussian, invert through the flow, get new digits.

## gan-mnist
Generative Models · order 12
- Min-max game on MNIST: a discriminator separates real digits from fakes; a generator (decoder from latent vectors) learns to fool it.
- Also projected-gradient-ascent adversarial examples that fool classifiers.

## vae-generative-modeling
Generative Models · order 13
- Encoder predicts mean and log-variance; reparameterization trick for end-to-end training; KL term keeps the latent space near N(0, I); sample from the prior and decode to get new images.

## foodflation
draft: true · TODO(owner)
- foodflation.io: Austrian grocery price comparison (in progress). Write it up when ready.
