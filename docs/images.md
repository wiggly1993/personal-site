# Images: source → destination

Source: `../Projects_Shortened_rebuild/images/`. **Copy, don't move.** Keep file names. Destinations are under `src/content/projects/` unless noted.

| Source | Copy to |
|---|---|
| title_background.png | `src/assets/site/` |
| pixelation_greyscale + pixelation_cnn → stacked into `pixelation_stacked.png` (cover) | self-supervised-unpixelation/ |
| aos_unet_architecture_upscaled (resized), aos_high_contrast, aos_low_contrast, aos_heavily_occluded | airborne-optical-sectioning/ |
| cancer_cell_lines.jpg | cancer-cell-classification/ |
| transformer_architecture | transformer-text-generation/ |
| connect4.jpg, connect4_umap, connect4_tsne | connect4-dimensionality-reduction/ |
| credit_cards, credit_pdp_pay1, credit_counterfactual_umap | xai-credit-default/ |
| ppo_training_process, ppo_rewards | ppo-bipedal-walker/ |
| llm_aider_1 + llm_aider_2 → stacked into `llm_aider_stacked.png` (chain version kept as `llm_aider_chain_backup.png`, unused) | llm-finetune-code-editing/ |
| llm_agent_1 | llm-agent-from-scratch/ |
| `../videos/` PPO_start + PPO_final .mp4 → `public/videos/ppo-bipedal-walker/` as ppo_start/ppo_final (in Result via `.video-pair`, not gallery) | public/ |
| `../AI_Projects/1000ppi/` Flows2.png → flows2.png (resized) | normalising-flows/ |
| `../AI_Projects/1000ppi/` "GANs neural networks.png" → gans_neural_networks.png | gan-mnist/ |
| jku_lit_logo.pdf | Don't copy unless owner says so (then SVG for About). |

No images yet (VAE, LSTM, foundations) → typographic tiles.

Check images first. Images are never cropped on the site (shown whole). Combine images with a Swift/CoreGraphics script (no installs). Resize anything over 2500px wide. Keep originals out of `public/` so Astro optimizes them.
