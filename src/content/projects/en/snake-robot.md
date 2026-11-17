---
title: Underwater Snake Robot — Unified Swimming & Grasping
summary: A single continuous control law that lets a nine-link underwater snake robot swim to a target and wrap around it to grasp it, without the power spikes of a hard controller switch.
category: research
order: 10
period: Dec 2025 – present
role: First author · individual research (Grade A)
tools: [MATLAB, CoppeliaSim, ACM-R5 model, Hydrodynamic co-simulation, Control design]
cover: /projects/snake-robot/cover.jpg
featured: true
metrics:
  - { value: "3–4×", label: lower joint power spikes }
  - { value: "100%", label: grasp success, 20 random trials }
  - { value: "IEEE", label: ICEEET 2026, first author }
gallery:
  - { src: /projects/snake-robot/power-transition.png, caption: "Joint power during the swim-to-grasp transition: hard switch (red) vs. simultaneous blend (orange) vs. the staggered λ-method (blue)." }
  - { src: /projects/snake-robot/trials-map.png, caption: "Target acquisition from 20 randomised start positions: 100% success, coloured by time to anchor." }
---

## Problem

Underwater snake robots can both swim and grasp, but they usually switch from the swimming controller to the grasping controller in one step. That sudden switch causes large spikes in joint power, which strains the motors and makes the motion unstable.

## Approach

- Developed the **λ-method**: one continuous control law that blends swimming into grasping through a transition variable λ.
- Staggered the blend along the body, so each joint changes over with a small delay instead of all joints at once.
- Validated it in a MATLAB / CoppeliaSim co-simulation of the nine-link ACM-R5 snake robot, including hydrodynamic forces.

## Result

- Peak joint power during the transition dropped **3–4×** compared with a hard switch.
- **100% grasp success** across 20 trials from randomised start positions in the tank.
- Presented at **IEEE ICEEET 2026** as first author, *A Unified Control Framework for Swimming and Grasping in Underwater Snake Robots*, with S. D. Bandara and C. D. Makavita.
