# Images: source → destination

Source: `../Projects_Shortened_rebuild/images/`. **Copy, don't move.** Keep file names. Destinations are under `src/content/projects/` unless noted.

| Source | Copy to |
|---|---|
| title_background.png | `src/assets/site/` |
| pixelation_greyscale, pixelation_cnn | self-supervised-unpixelation/ |
| aos_unet_architecture, aos_high_contrast, aos_low_contrast, aos_heavily_occluded | airborne-optical-sectioning/ |
| cancer_cell_lines.jpg | cancer-cell-classification/ |
| transformer_architecture | transformer-text-generation/ |
| connect4.jpg, connect4_umap, connect4_tsne | connect4-dimensionality-reduction/ |
| credit_cards, credit_pdp_pay1, credit_counterfactual_umap | xai-credit-default/ |
| ppo_training_process, ppo_rewards | ppo-bipedal-walker/ |
| jku_lit_logo.pdf | Don't copy unless owner says so (then SVG for About). |

No images yet: LLM fine-tuning, LLM agent, flows, GAN, VAE, LSTM, foundations → typographic tiles. If the owner adds slide diagrams later, wire them up.

Check every image before use. Resize anything over 2500px wide. Keep originals out of `public/` so Astro optimizes them.
