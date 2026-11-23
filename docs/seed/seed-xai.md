# Seed: explainable AI & data viz

## xai-credit-default
Explainable AI & Data Viz · featured · order 6 · light
- Explaining credit-card default predictions.
- 30,000 Taiwan credit-card clients (payment history, demographics, default outcome).
- Random Forest classifier.
- SHAP for global feature importance, LIME for individual explanations, Partial Dependence Plots, counterfactual exploration via UMAP.
- Result: PAY1 (most recent payment status) was the dominant predictor across all methods.
- From team presentation: team of four; grid search on F1; 5th method global surrogate tree (root split PAY_1); PAY_1 = −1 on time, 1–9 months late; PDP jump at 2→3 months; demographics flat. Counterfactuals (DiCE + UMAP): red = default; PAY_1 change reaches main red region, other features only an implausible island. F1 0.50 omitted on purpose.

## connect4-dimensionality-reduction
Explainable AI & Data Viz · order 7
- Visualizing high-dimensional Connect 4 game states.
- Recorded thousands of moves from AI-vs-random games; 42 board positions per state.
- UMAP and t-SNE compress states to 2D.
- UMAP shows how game complexity changes over time; t-SNE trajectories show game paths coloured by winner.
