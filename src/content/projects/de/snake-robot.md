---
title: Unterwasser-Schlangenroboter — Schwimmen & Greifen vereint
summary: Ein durchgängiges Regelgesetz, mit dem ein neungliedriger Unterwasser-Schlangenroboter zum Ziel schwimmt und es umschlingt und greift – ohne die Leistungsspitzen eines harten Reglerwechsels.
category: research
order: 10
period: seit Dez. 2025
role: Erstautor · eigenständige Forschung (Note A)
tools: [MATLAB, CoppeliaSim, ACM-R5-Modell, Hydrodynamische Co-Simulation, Reglerentwurf]
cover: /projects/snake-robot/cover.jpg
featured: true
metrics:
  - { value: "3–4×", label: geringere Leistungsspitzen }
  - { value: "100 %", label: Greiferfolg, 20 Zufallsversuche }
  - { value: "IEEE", label: ICEEET 2026, Erstautor }
gallery:
  - { src: /projects/snake-robot/power-transition.png, caption: "Gelenkleistung beim Übergang vom Schwimmen zum Greifen: harter Wechsel (rot), gleichzeitige Überblendung (orange), gestaffelte λ-Methode (blau)." }
  - { src: /projects/snake-robot/trials-map.png, caption: "Zielerfassung aus 20 zufälligen Startpositionen: 100 % Erfolg, eingefärbt nach Zeit bis zur Verankerung." }
---

## Ausgangslage

Unterwasser-Schlangenroboter können schwimmen und greifen, wechseln aber meist schlagartig vom Schwimm- zum Greifregler. Dieser abrupte Wechsel erzeugt starke Leistungsspitzen in den Gelenken, belastet die Motoren und macht die Bewegung instabil.

## Vorgehen

- Entwicklung der **λ-Methode**: ein durchgängiges Regelgesetz, das über eine Übergangsvariable λ vom Schwimmen ins Greifen überblendet.
- Gestaffelte Überblendung entlang des Körpers: Jedes Gelenk wechselt mit kleiner Verzögerung, statt alle gleichzeitig.
- Validierung in einer MATLAB-/CoppeliaSim-Co-Simulation des neungliedrigen ACM-R5-Schlangenroboters einschließlich hydrodynamischer Kräfte.

## Ergebnis

- Die maximale Gelenkleistung beim Übergang sank gegenüber dem harten Wechsel um das **3- bis 4-Fache**.
- **100 % Greiferfolg** in 20 Versuchen aus zufälligen Startpositionen im Becken.
- Als Erstautor auf der **IEEE ICEEET 2026** präsentiert: *A Unified Control Framework for Swimming and Grasping in Underwater Snake Robots*, mit S. D. Bandara und C. D. Makavita.
