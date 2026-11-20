---
title: "Explaining Credit Default"
subtitle: "Why does a model think someone won't pay? Four explanation methods, one answer."
summary: "SHAP, LIME, partial dependence and UMAP counterfactuals explain a Random Forest on 30,000 credit-card clients. PAY1 dominates."
category: "Explainable AI & Data Viz"
tags: ["SHAP", "LIME", "Partial Dependence Plots", "Counterfactuals", "UMAP", "Random Forest"]
date: 2025-01-01 # TODO(owner): real date
order: 6
featured: true
theme: "light"
cover: "./credit_cards.png"
gallery:
  - src: "./credit_pdp_pay1.png"
    caption: "Partial dependence of default probability on PAY_1 (most recent payment status)."
  - src: "./credit_counterfactual_umap.png"
    caption: "Counterfactuals in UMAP space: changing PAY_1 versus changing other features."
---

## Problem

A model that predicts credit-card default is only useful if people can understand its decisions. I wanted to know what actually drives its predictions.

## Approach

I used a dataset of 30,000 Taiwanese credit-card clients with their payment history, demographics and whether they defaulted, and trained a Random Forest classifier on it.

Then I explained it from several angles:
- **SHAP** for global feature importance
- **LIME** for explanations of individual predictions
- **Partial Dependence Plots** to see how one feature shifts the prediction
- **Counterfactual exploration via UMAP** to see what would have to change for a different outcome

## Result

Every method pointed the same way: **PAY1**, the most recent payment status, was the dominant predictor.

**Tech:** Random Forest · SHAP · LIME · Partial Dependence Plots · UMAP
