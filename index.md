---
layout: single
title: "About me"
description: "Zhiyu Shi develops scientific machine learning and multiscale models of reaction kinetics, plasma chemistry, ignition, and detonation for propulsion and energy systems."
author_profile: true
redirect_from:
  - /about/
---

<p id="profile-preview-note" hidden><small>December 2026 profile preview</small></p>

I develop multiscale computational methods to understand and predict the behavior of chemically reacting systems and to guide their design for sustainable energy and green manufacturing. My work combines scientific machine learning, atomistic simulation, and multiphysics CFD to study how molecular reactions shape the performance of propulsion and catalytic systems. I am particularly interested in how we can steer reactions in gases and on surfaces by controlling when and where energy is deposited and how reactive species are transported.

{% include effective-text.html from=site.postdoc_start before="In November 2026, I start as a postdoctoral scholar" after="I am a postdoctoral scholar" %} in the Department of Chemistry at the University of California, Berkeley, working with [Bingqing Cheng](https://chemistry.berkeley.edu/node/2526) on machine learning for atomistic simulation. {% include effective-text.html from=site.phd_conferral before="I completed my doctoral research" after="I earned my Ph.D." %} in Mechanical and Aerospace Engineering at Princeton University with [Yiguang Ju](https://mae.princeton.edu/people/yiguang-ju). I received my B.S. in Theoretical and Applied Mechanics from Peking University.

## Research

I develop scientific machine learning and experimental approaches to understand, predict, and engineer chemically reacting systems for sustainable energy, advanced materials manufacturing, and climate-resilient technologies.In propulsion, I study how electrical discharges influence ignition and detonation through their effects on chemistry and flow. My simulations of hydrogen–oxygen mixtures revealed that the same discharge can advance local ignition yet delay detonation. Reactions triggered by the discharge consume some of the fuel before the flame arrives, leaving less energy to strengthen the leading shock. This competition helps explain why faster chemistry does not always lead to faster detonation.

In catalytic systems, I study how a plasma changes the catalyst itself. In experiments on ammonia synthesis, adding hydrogen to a nitrogen plasma produced more nickel nitride even as the concentration of atomic nitrogen in the gas fell. By combining plasma kinetics with density functional theory, I found that hydrogen adsorbed on nickel helps nitrogen enter the metal, offering a molecular explanation for this trend.

AI can significantly accelerate all scales of simulations with its strong interpolation capabilities and, if trained well, good accuracy, efficiency, and generalization. For example, AI can fundamentally change how people study reactive events relevant to propulsion and energy conversion. Interatomic potentials learned from quantum calculations let us follow larger systems for longer times and sample the many molecular encounters needed to predict reaction rates. For hydrogen combustion, I developed a potential that combined two levels of quantum chemistry and reproduced benchmark rate constants for an elementary reaction with more than 80% reduced computational cost, collaborating with [Ahren Jasper](https://www.anl.gov/profile/ahren-w-jasper) and [Stephen Klippenstein](https://www.anl.gov/profile/stephen-j-klippenstein). With [Aditya Lele](https://engineering.rowan.edu/faculty_staff/listing/aditya_lele.html) and [Mark Martirez](https://www.pppl.gov/people/mark-martirez), we used a machine-learned force field to study how temperature modulation affects ammonia synthesis on iron. At the scale of reaction networks, I also co-developed Stiff-PINN working with [Sili Deng](https://meche.mit.edu/people/faculty/silideng@mit.edu), which uses the separation between fast and slow reactions to solve stiff chemical kinetics with physics-informed neural networks.

How much quantum chemistry is needed to predict a combustion reaction rate? For an elementary hydrogen reaction, I used a small set of high-accuracy calculations to refine a machine-learned interatomic potential. The resulting molecular trajectories reproduced benchmark rate constants while cutting the cost of generating training data by more than 80%. [Reaction dynamics and machine-learned potentials]({{ '/project/mlmd/' | relative_url }})

At the scale of a reacting flow, I study how electrical discharges change when and where a fuel ignites. My microchannel simulations showed that the number of discharge pulses can change the mechanism of detonation onset. I also study how plasma-generated radicals alter catalytic surfaces, including how nitrogen enters nickel during ammonia synthesis. [Plasma-assisted detonation]({{ '/project/DDT/' | relative_url }}) · [Plasma–surface chemistry]({{ '/project/nitridation/' | relative_url }})

## Research direction

I aim to develop physics-informed surrogate models for multidisciplinary design optimization in aerospace propulsion and, more broadly, energy conversion. A central question is: which details of molecular chemistry must we resolve to make a reliable engineering design choice?

1. **Coupling electron kinetics to reacting flows.** I plan to develop an ML-accelerated solver for the electron Boltzmann equation that can run within a reacting-flow simulation. This would let me study how a changing gas mixture redistributes electron energy among excitation, chemical reactions, and heating, and how those changes feed back on the flow during transient propulsion operation.

2. **Predicting reaction pathways at catalytic interfaces.** I plan to develop machine-learned interatomic potentials to explore competing reaction pathways at gas–solid and liquid–solid interfaces as catalyst surfaces evolve under operating conditions. My goal is to identify which surface structures favor a desired product and use that knowledge to guide the choice of catalyst materials.

3. **Using design uncertainty to guide molecular simulation.** I plan to use surrogate models of coupled chemistry, flow, and heat transfer to compare candidate designs and identify the reaction rates whose uncertainty could change their ranking. I can then target those reactions with higher-fidelity atomistic calculations and bring the refined rates back into the design comparison.
