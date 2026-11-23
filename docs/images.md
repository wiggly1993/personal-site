# Images: source → destination

Source: `../Projects_Shortened_rebuild/images/`. **Copy, don't move.** Destinations: `src/content/projects/` unless noted.

| Source | Copy to |
|---|---|
| title_background.png | `src/assets/site/` |
| pixelation_greyscale + pixelation_cnn → `pixelation_stacked.png` | self-supervised-unpixelation/ |
| aos_unet_architecture_upscaled (resized), aos_high_contrast, aos_low_contrast, aos_heavily_occluded; cover aos_inputs_banner (report PDF) | airborne-optical-sectioning/ |
| cancer_cell_lines.jpg | cancer-cell-classification/ |
| transformer_architecture | transformer-text-generation/ |
| connect4.jpg, connect4_umap, connect4_tsne | connect4-dimensionality-reduction/ |
| credit_cards, credit_pdp_pay1, credit_counterfactual_umap | xai-credit-default/ |
| ppo_training_process, ppo_rewards | ppo-bipedal-walker/ |
| llm_aider_1 + llm_aider_2 → stacked into `llm_aider_stacked.png` (+ unused `llm_aider_chain_backup.png`) | llm-finetune-code-editing/ |
| llm_agent_1 | llm-agent-from-scratch/ |
| `../videos/` PPO_start + PPO_final .mp4 → `public/videos/ppo-bipedal-walker/` (Result section, `.video-pair`) | public/ |
| Flows2.png → flows2.png (resized) | normalising-flows/ |
| "GANs neural networks.png" → gans_neural_networks.png | gan-mnist/ |
| VAEs → vaes | vae-generative-modeling/ |
| CNNs → cnns (cover), Depth_Conv → depth_conv | deep-learning-foundations/ |
| LSTM → lstm | lstm-text-generation/ |
| jku_lit_logo.pdf | Don't copy unless owner says so (then SVG for About). |

Projects without images → typographic tiles.

Check images first. Never crop. Combine images with a Swift/CoreGraphics script (no installs). Resize copies to ≤2500px wide. Keep originals out of `public/` so Astro optimizes them.
