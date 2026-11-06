---
title: "Learning reaction dynamics from molecular collisions"
short_title: "Machine-learned reaction dynamics"
anchor: molecular-reaction-dynamics
permalink: /project/mlmd/
project_order: 4
figure_layout: portrait
figures:
  - file: molecular-reaction-dynamics.webp
    thumbnail: molecular-reaction-dynamics-800.webp
    width: 2200
    height: 2374
    alt: "A transfer-learned interatomic potential drives molecular collision trajectories. Two plots compare predicted and reference rate constants for hydrogen and oxygen atoms reacting with HO₂."
    caption: "From quantum energies to collision statistics. The two panels at the bottom test the learned potential against reference reaction rates."
references:
  - doi: 10.1021/acs.jpca.4c00750
    credit: "Z. Shi, A. D. Lele, A. W. Jasper, S. J. Klippenstein & Y. Ju"
  - doi: 10.2514/6.2026-1623
    title: "Ab Initio-Trained Machine Learning Molecular Dynamics Model for Radical Reactions in Hydrogen Combustion"
    credit: "Z. Shi, A. D. Lele, A. W. Jasper, S. J. Klippenstein & Y. Ju"
    venue: "AIAA SciTech Forum"
    year: 2026
    note: "Conference paper"
  - doi: 10.1021/acs.jpcc.4c07596
    credit: "A. D. Lele, Z. Shi, S. Khetan, E. A. Carter, J. M. P. Martirez & Y. Ju"
  - manuscript: radical-reactions
  - manuscript: collisional-energy-transfer
---

Models of flames and catalysts depend on rate constants. Each one represents the outcome of countless molecular encounters, only a fraction of which form a new bond. I train interatomic potentials on quantum calculations so that enough of these encounters can be simulated to predict rates directly. For a benchmark reaction in hydrogen combustion, combining two levels of quantum chemistry reproduced the reference rates while cutting the cost of generating training data by more than 80%.

With Argonne collaborators, I have extended this approach to collisions that redistribute energy as well as those that form new products. With Aditya Lele and colleagues, I helped develop a force field to follow ammonia synthesis on iron under temperature modulation. These studies connect the motion of individual atoms to the reaction data that larger-scale models need.
