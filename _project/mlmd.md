---
title: "Machine-learned interatomic potentials for reaction kinetics"
permalink: /project/mlmd/
project_order: 1
excerpt: "I used multifidelity transfer learning to predict elementary reaction rates in hydrogen combustion while reducing the cost of generating quantum-chemistry training data."
---

A potential can fit the energies of thousands of molecular configurations and still give the wrong reaction rate. For hydrogen combustion, I tested a machine-learned potential by running molecular collisions and comparing the predicted rate constants with benchmark calculations.

## Learning from two levels of quantum chemistry

I first trained the potential on a large set of density functional theory calculations, then refined it with higher-accuracy multireference energies for a small subset of configurations. For H + HO₂ → H₂ + ³O₂, quasi-classical trajectories on the refined potential reproduced the benchmark rate constants. Transfer learning reduced the cost of generating the training data by more than 80% relative to using high-accuracy quantum calculations alone. [Read the study in *The Journal of Physical Chemistry A*](https://doi.org/10.1021/acs.jpca.4c00750).

<figure>
  <img src="{{ '/images/projects/multifidelity-kinetics.svg' | relative_url }}" width="620" height="295" style="max-width: 100%; height: auto;" alt="Density functional theory data train an initial potential. Multireference energies refine it. Collision trajectories on the refined potential yield rate constants for comparison with benchmarks.">
</figure>

## From one reaction to competing outcomes

In collaboration with Argonne National Laboratory, I extended this approach to model HO₂ collisions with radicals and with third bodies. A collision can rearrange chemical bonds or redistribute energy among molecular motions. The trajectories let us extract reaction rates and collisional energy-transfer statistics for kinetic models of hydrogen combustion. [Read the AIAA SciTech paper on radical reactions](https://doi.org/10.2514/6.2026-1623).

In related work, I helped develop a machine-learned force field for ammonia synthesis on iron catalysts. We used molecular dynamics to study how temperature modulation affects reactions on the iron surface. [Read the study in *The Journal of Physical Chemistry C*](https://doi.org/10.1021/acs.jpcc.4c07596).
