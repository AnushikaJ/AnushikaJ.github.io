---
title: Portable Debugger Jig
summary: A compact, menu-driven debugging station with a custom PCB clamp that gives firmware engineers instant ST-Link / J-Link and serial access to boards.
category: industry
order: 3
period: "2025"
role: Design, 3D printing & assembly
tools: [SolidWorks, 3D printing, ST-Link, FTDI, LCD + rotary encoder]
cover: /projects/debugger-jig/cover.jpg
coverFit: contain
metrics:
  - { value: "1 clamp", label: to connect any board }
  - { value: "2 modes", label: flash firmware or serial console }
---

## Problem

Firmware engineers lost time wiring debug probes to boards by hand for every test, and loose wires caused bad connections.

## Approach

- Designed a portable, 3D-printed enclosure with a custom hinged PCB clamp that seats the board and connects it in one motion.
- Added an LCD menu with a rotary encoder for choosing between firmware flashing and a serial console over FTDI.
- Built in a docked ST-Link programmer port for STM32 boards.

## Result

Engineers can now connect a board and start flashing or debugging in seconds, with a reliable connection every time.
