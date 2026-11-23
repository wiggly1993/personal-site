# Seed: computer vision (part B)

## cancer-cell-classification → "Machine Learning for Cells & Molecules"
Computer Vision · order 5 · three challenges, hidden test sets
- **Cells:** 9 lines, 3-channel microscopy (nucleus, microtubules, ER); 9,632 train images, ~600–2,100 per class, upsampled to 2,100; flips/rotations/shifts/shears/contrast/blur; pre-trained Wide ResNet-101-2, fc→9, Adam, cross-entropy, early stopping. **Balanced accuracy 0.90.**
- **Toxicity:** 12,000 SMILES, 11 sparse assay labels; Morgan fingerprints (RDKit, radius 2, 1,024 bits); Random Forest per assay, grid search + 5-fold CV on AUC. **Test mean AUC 0.758** (0.63–0.93); CV avg 0.77.
- **Molecule generation:** ~1.04M SMILES, 37-char vocab, padded to 101; Keras embedding + 2×LSTM(256), dropout 0.25, softmax, 5 epochs, Adam; first char sampled from train distribution, then to end token; ~15k → ~12.7k valid (~15% invalid). **FCD 0.824, validity 1.0, uniqueness 0.978, novelty 0.962.**
- Source: owner's notebooks + slides (ext. SSD); plots extracted from the notebooks.

## deep-learning-foundations
Computer Vision · order 14
Collection of smaller CNN projects:
- Modified VGG plus ImageNet-pre-trained models on CIFAR-10 with layer freezing for faster training.
- ResNet-style skip connections for deeper nets.
- Lightweight mobile CNNs (separable convolutions plus attention, under 30K parameters).
- Training tooling (TensorBoard, progress bars, checkpointing, hyperparameter search).
