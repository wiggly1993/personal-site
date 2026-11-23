# Seed: computer vision (part A)

## airborne-optical-sectioning
Computer Vision · featured · order 3 · dark
- JKU CV Lab group project (team of six), WS 2023/24. Source: owner's project report.
- ~33k simulated scenes; AOS integrator → focal stacks of three 512×512 images (0 m, 1 m, 2 m).
- U-Net-like CNN autoencoder, 6+6 levels, skip connections, 18.7M parameters.
- Self-supervised, MSE loss, Adam, 21 epochs, 24,960 stacks (80/20). Pose head tried, didn't help, dropped.
- Val MSE 0.80 → 0.0014; test PSNR avg 44 dB; works on real drone integrals. Untested: multiple people, animals.
- Metrics: 24,960 training focal stacks · 18.7M parameters · 44 dB PSNR.

## self-supervised-unpixelation
Computer Vision · featured · order 4 · light
- CNN-based pixelation removal without labelled data.
- Images converted to grayscale, resized to 64×64.
- Random rectangular regions replaced with block averages.
- Simple 9-layer CNN with 128 channels (not a U-Net). Original pixels are the ground truth.
- Unpixelates images it has never seen.
