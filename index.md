---
layout: single
title: "About me"
description: "Zhiyu Shi develops scientific machine learning and multiscale models of reaction kinetics, plasma chemistry, ignition, and detonation for propulsion and energy systems."
author_profile: true
redirect_from:
  - /about/
---

<p id="profile-preview-note" hidden><small>December 2026 profile preview</small></p>

I study how molecular reactions shape the performance of propulsion and catalytic systems. I am particularly interested in how the design of these systems can steer reactions in gases and on surfaces by controlling when and where energy is deposited and how reactive species are transported. I combine scientific machine learning, atomistic simulation, and multiphysics CFD to connect these molecular mechanisms to the scales at which fuels are produced and used.

{% include effective-text.html from=site.postdoc_start before="In November 2026, I start as a postdoctoral scholar" after="I am a postdoctoral scholar" %} in the Department of Chemistry at the University of California, Berkeley, working with [Bingqing Cheng](https://chemistry.berkeley.edu/node/2526) on machine learning for atomistic simulation. {% include effective-text.html from=site.phd_conferral before="I completed my doctoral research" after="I earned my Ph.D." %} in Mechanical and Aerospace Engineering at Princeton University with [Yiguang Ju](https://mae.princeton.edu/people/yiguang-ju). I received my B.S. in Theoretical and Applied Mechanics from Peking University.

## Research

How much quantum chemistry is needed to predict a combustion reaction rate? For an elementary hydrogen reaction, I used a small set of high-accuracy calculations to refine a machine-learned interatomic potential. The resulting molecular trajectories reproduced benchmark rate constants while cutting the cost of generating training data by more than 80%. [Reaction dynamics and machine-learned potentials]({{ '/project/mlmd/' | relative_url }})

At the scale of a reacting flow, I study how electrical discharges change when and where a fuel ignites. My microchannel simulations showed that the number of discharge pulses can change the mechanism of detonation onset. I also study how plasma-generated radicals alter catalytic surfaces, including how nitrogen enters nickel during ammonia synthesis. [Plasma-assisted detonation]({{ '/project/DDT/' | relative_url }}) · [Plasma–surface chemistry]({{ '/project/nitridation/' | relative_url }})

## Research direction

I aim to develop physics-informed surrogate models for multidisciplinary design optimization in aerospace propulsion and, more broadly, energy conversion. A central question is: which details of molecular chemistry must we resolve to make a reliable engineering design choice?

1. Coupling electron kinetics to reacting flows. I plan to develop an ML-accelerated solver for the electron Boltzmann equation that can run within a reacting-flow simulation. This would let me study how a changing gas mixture redistributes electron energy among excitation, chemical reactions, and heating, and how those changes feed back on the flow during transient propulsion operation.

2. Predicting reaction pathways at catalytic interfaces. I plan to develop machine-learned interatomic potentials to explore competing reaction pathways at gas–solid and liquid–solid interfaces as catalyst surfaces evolve under operating conditions. My goal is to identify which surface structures favor a desired product and use that knowledge to guide the choice of catalyst materials.

3. Using design uncertainty to guide molecular simulation. I plan to use surrogate models of coupled chemistry, flow, and heat transfer to compare candidate designs and identify the reaction rates whose uncertainty could change their ranking. I can then target those reactions with higher-fidelity atomistic calculations and bring the refined rates back into the design comparison.
