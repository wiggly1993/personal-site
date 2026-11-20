# Seed: computer vision (part A)

## airborne-optical-sectioning
Computer Vision · featured · order 3 · dark
- Detecting people hidden by forest occlusion using drone-based Airborne Optical Sectioning (AOS), 3 input images at a time.
- Dataset: 30,000 simulated focal stacks (focal heights 0 m, 1 m, 2 m).
- U-Net-like CNN autoencoder with skip connections (18.7M parameters).
- Self-supervised: ground-truth images as restoration targets. Successfully removes occlusions.
- Gallery: U-Net architecture, high-contrast, low-contrast, heavily occluded results.
- Metrics: 30,000 focal stacks · 18.7M parameters.

## self-supervised-unpixelation
Computer Vision · featured · order 4 · light
- CNN-based pixelation removal without labelled data.
- Images converted to grayscale, resized to 64×64.
- Random rectangular regions replaced with block averages.
- Simple 9-layer CNN with 128 channels (not a U-Net). Original pixels are the ground truth.
- Unpixelates images it has never seen.
