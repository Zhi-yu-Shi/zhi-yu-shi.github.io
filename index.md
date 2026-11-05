---
layout: single
title: "About me"
description: "Zhiyu Shi develops scientific machine learning and multiscale models of reaction kinetics, plasma chemistry, ignition, and detonation for propulsion and energy systems."
author_profile: true
redirect_from:
  - /about/
---

<p id="profile-preview-note" hidden><small>December 2026 profile preview</small></p>

Hi, I’m Zhiyu Shi (石智宇, pronounced roughly “Jurr-yoo Shurr”). I am a postdoctoral scholar in the Department of Chemistry at the University of California, Berkeley, working with [Bingqing Cheng](https://chemistry.berkeley.edu/node/2526) on machine learning for atomistic simulation starting November 2026. I completed my doctoral research in Mechanical and Aerospace Engineering at Princeton University with [Yiguang Ju](https://mae.princeton.edu/people/yiguang-ju). My PhD was supported in part by the Charlotte Elizabeth Procter Fellowship. I received my B.S. in Theoretical and Applied Mechanics from Peking University.

I develop multiscale computational methods to understand and predict the behavior of chemically reacting systems and to guide their design for sustainable energy and green manufacturing. My work combines scientific machine learning, atomistic simulation, and multiphysics CFD to study how molecular reactions shape the performance of propulsion and catalytic systems. I am particularly interested in how we can steer reactions in gases and on surfaces by controlling when and where energy is deposited and how reactive species are transported.

## Research

I am particularly interested in nonmonotonic behavior in reacting systems. When a change in operating conditions reverses its effect, it can reveal competing mechanisms and suggest how to control the system. In propulsion, I study how energy deposited by a plasma discharge controls when and where a fuel ignites, and why stronger discharges do not always improve ignition. Because the timing and location of autoignition can also determine whether an accelerating flame develops into a detonation, I used multiphysics simulations to investigate that transition. My work showed how a discharge can either advance or delay detonation onset. In catalysis, I ask whether a plasma can open alternative routes to ammonia synthesis by changing the catalyst itself, and how to control plasma-catalytic pathways. Working with [Yiteng Zheng](https://scholar.google.com/citations?user=v95Bo_cAAAAJ&hl=en), I studied why N2/H2 plasma nonmonotonically produce nickel nitride formation at different feed ratios and thus lead to nonmonotonic NH3 production via alternative Mars–van Krevelen pathway. [Plasma-assisted detonation]({{ '/project/DDT/' | relative_url }}) · [Plasma–surface chemistry]({{ '/project/nitridation/' | relative_url }})

I use scientific machine learning to expand the range of reactive events we can study and bring that molecular understanding into engineering models. By learning machine learning interatomic potentials (MLIP) from quantum calculations, we can follow larger systems for longer times and sample enough molecular encounters needed to predict reaction rates. Working with [Ahren Jasper](https://www.anl.gov/profile/ahren-w-jasper) and [Stephen Klippenstein](https://www.anl.gov/profile/stephen-j-klippenstein), I developed an MLIP for hydrogen combustion that combined multiple levels of quantum chemistry and reproduced benchmark rate constants for an elementary reaction with more than 80% reduced computational cost. With [Aditya Lele](https://engineering.rowan.edu/faculty_staff/listing/aditya_lele.html) and [Mark Martirez](https://www.pppl.gov/people/mark-martirez), we developed an MLIP to study how nonequilibrium temperature modulation affects ammonia synthesis on iron catalysts. At the scale of reaction networks, I also co-developed Stiff-PINN working with [Sili Deng](https://meche.mit.edu/people/faculty/silideng@mit.edu), which uses the separation between fast and slow reactions to solve stiff chemical kinetics with physics-informed neural networks. [Reaction dynamics and machine-learned potentials]({{ '/project/mlmd/' | relative_url }})

## Research direction

I aim to develop physics-informed surrogate models for multidisciplinary design optimization in aerospace propulsion and, more broadly, energy conversion. A central question is: which details of molecular chemistry must we resolve to make a reliable engineering design choice?

1. **Coupling electron kinetics to reacting flows.** I plan to develop an ML-accelerated solver for the electron Boltzmann equation that can run within a reacting-flow simulation. This would let me study how a changing gas mixture redistributes electron energy among excitation, chemical reactions, and heating, and how those changes feed back on the flow during transient propulsion operation.

2. **Predicting reaction pathways at catalytic interfaces.** I plan to develop machine-learned interatomic potentials to explore competing reaction pathways at gas–solid and liquid–solid interfaces as catalyst surfaces evolve under operating conditions. My goal is to identify which surface structures favor a desired product and use that knowledge to guide the choice of catalyst materials.

3. **Using design uncertainty to guide molecular simulation.** I plan to use surrogate models of coupled chemistry, flow, and heat transfer to compare candidate designs and identify the reaction rates whose uncertainty could change their ranking. I can then target those reactions with higher-fidelity atomistic calculations and bring the refined rates back into the design comparison.
