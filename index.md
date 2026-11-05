---
layout: single
title: "About me"
description: "Zhiyu Shi develops scientific machine learning and multiscale models of reaction kinetics, plasma chemistry, ignition, and detonation for propulsion and energy systems."
author_profile: true
redirect_from:
  - /about/
---

<p id="profile-preview-note" hidden><small>December 2026 profile preview</small></p>

I develop computational models that connect molecular reaction dynamics to ignition and detonation in propulsion systems. My research combines scientific machine learning, chemical kinetics, and simulations of reacting flows.

{% include effective-text.html from=site.postdoc_start before="In November 2026, I start as a postdoctoral scholar" after="I am a postdoctoral scholar" %} in the Department of Chemistry at the University of California, Berkeley, working with [Bingqing Cheng](https://chemistry.berkeley.edu/node/2526) on machine learning for atomistic simulation. {% include effective-text.html from=site.phd_conferral before="I completed my doctoral research" after="I earned my Ph.D." %} in Mechanical and Aerospace Engineering at Princeton University with [Yiguang Ju](https://mae.princeton.edu/people/yiguang-ju). I received my B.S. in Theoretical and Applied Mechanics from Peking University.

## Research

How much quantum chemistry is needed to predict a combustion reaction rate? For an elementary hydrogen reaction, I used a small set of high-accuracy calculations to refine a machine-learned interatomic potential. The resulting molecular trajectories reproduced benchmark rate constants while cutting the cost of generating training data by more than 80%. [Reaction dynamics and machine-learned potentials]({{ '/project/mlmd/' | relative_url }})

At the scale of a reacting flow, I study how electrical discharges change when and where a fuel ignites. My microchannel simulations showed that the number of discharge pulses can change the mechanism of detonation onset. I also study how plasma-generated radicals alter catalytic surfaces, including how nitrogen enters nickel during ammonia synthesis. [Plasma-assisted detonation]({{ '/project/DDT/' | relative_url }}) · [Plasma–surface chemistry]({{ '/project/nitridation/' | relative_url }})

## Research direction

I want to build physics-informed surrogate models for multidisciplinary design optimization in aerospace propulsion. For example, how can a discharge ignite a moving fuel–air mixture with the least electrical energy as fuel composition and flow speed vary? I would use high-fidelity plasma and flow simulations to identify which reactions a faster model must retain, then use that model to compare pulse timings and electrode geometries under uncertain reaction rates.

