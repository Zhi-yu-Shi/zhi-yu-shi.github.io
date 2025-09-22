---
title: "Advancing Reaction Kinetics Modeling with an Ab Initio Trained Machine Learning Based Molecular Dynamics Model (aML-MD)"
permalink: /project/mlmd/
excerpt: "The first work to use ML-MD for quantitative reaction dynamics in complex combustion and catalysis systems"
teaser: /images/projects/nh3-thumb.jpg
header:
  overlay_image: /images/projects/nh3-hero.jpg
tags: [ML-MD, quasiclassical trajectory, transfer learning]
---

Machine learning (ML) provides a great opportunity for the construction of models with improved accuracy in classical molecular
dynamics (MD). However, the accuracy of a ML trained model is limited by the quality and quantity of the training data. Generating large
sets of accurate ab initio training data can require significant computational resources. Furthermore, inconsistent or incompatible
data with different accuracies obtained using different methods may lead to biased or unreliable ML models that do not accurately represent the underlying physics. 

Recently, transfer learning showed its potential for avoiding these problems as well as for improving the accuracy, efficiency, and generalization of ML models using multifidelity data. In this work, ab initio trained ML-based MD (aML-MD) models are developed through transfer learning using DFT and multireference data from multiple sources with varying accuracy within the Deep Potential MD framework. The accuracy of the force field is demonstrated by calculating rate constants for the H + HO2 → H2 + O2 reaction using quasi-classical trajectories. We show that the aML-MD model with transfer learning can accurately predict the rate constants while reducing the computational cost by more than five times compared to the use of more expensive quantum chemistry training datasets. Hence, the aML-MD model with transfer learning shows great potential in using multifidelity data to reduce the computational cost involved in generating the training set for these potentials.
