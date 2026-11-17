---
title: Autonomous Flapping-Wing Ornithopter
summary: Autonomous waypoint navigation indoors, without GPS, for a 1.9 m flapping-wing aircraft. Final-year project and the only Grade A in the batch.
category: research
order: 11
period: Dec 2025 – Jun 2026
role: Final-year project team · navigation & ground station
tools: [Pixhawk, ArduPlane, EKF sensor fusion, MAVLink, ESP32 telemetry, Python]
cover: /projects/ornithopter/cover.jpg
featured: true
metrics:
  - { value: "1.9 m", label: flapping-wing aircraft }
  - { value: "No GPS", label: indoor waypoint navigation }
  - { value: "Grade A", label: only A in the batch }
---

## Problem

Flapping-wing aircraft are agile, but they are hard to control and to fly autonomously. Indoors there is also no GPS, which most autopilots rely on for navigation.

## Approach

- Built autonomy on a Pixhawk running ArduPlane, using EKF sensor fusion to estimate position without GPS.
- Added ESP32-based telemetry and wrote a Python ground-station application for mission planning and live monitoring over MAVLink.
- Tested and flew the full system in an indoor hall.

## Result

The ornithopter flew **autonomous waypoint missions without GPS**. The project received the **only Grade A** in the batch, and a journal paper is under review.
