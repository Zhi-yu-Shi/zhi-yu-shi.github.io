---
layout: archive
title: "Projects"
permalink: /project/
author_profile: true
---

My doctoral research at Princeton examined hydrogen combustion, ammonia synthesis, and plasma-assisted propulsion across length scales. I used molecular trajectories to predict reaction rates, electronic-structure calculations to explain how nitrogen enters a catalyst, and reactive-flow simulations to determine when a flame grows or transitions to detonation.

{% assign projects = site.project | sort: "project_order" %}
{% for project in projects %}
<h2><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h2>
<p>{{ project.excerpt | escape }}</p>
{% endfor %}

## Earlier work at MIT

Before my PhD, I worked with Sili Deng's group on Stiff-PINN. We used a quasi-steady-state approximation for fast-reacting species to help physics-informed neural networks solve chemical kinetics problems with widely separated timescales. [Read the Stiff-PINN paper](https://doi.org/10.1021/acs.jpca.1c05102).
