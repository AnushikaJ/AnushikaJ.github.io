---
title: Autonomer Schlagflügel-Ornithopter
summary: Autonome Wegpunktnavigation ohne GPS in Innenräumen für ein Schlagflügel-Fluggerät mit 1,9 m Spannweite – Abschlussprojekt mit der einzigen Note A im Jahrgang.
category: research
order: 11
period: Dez. 2025 – Jun. 2026
role: Abschlussprojekt-Team · Navigation & Bodenstation
tools: [Pixhawk, ArduPlane, EKF-Sensorfusion, MAVLink, ESP32-Telemetrie, Python]
cover: /projects/ornithopter/cover.jpg
featured: true
metrics:
  - { value: "1,9 m", label: Schlagflügel-Fluggerät }
  - { value: "Ohne GPS", label: Wegpunktnavigation in Innenräumen }
  - { value: "Note A", label: einzige im Jahrgang }
---

## Ausgangslage

Schlagflügel-Fluggeräte sind wendig, aber schwer zu regeln und autonom zu fliegen. In Innenräumen fehlt zudem GPS, auf das die meisten Autopiloten für die Navigation angewiesen sind.

## Vorgehen

- Autonomie auf einem Pixhawk mit ArduPlane, Positionsschätzung ohne GPS per EKF-Sensorfusion.
- ESP32-basierte Telemetrie und eine eigene Python-Bodenstation für Missionsplanung und Live-Überwachung über MAVLink.
- Erprobung und Flugtests des Gesamtsystems in einer Halle.

## Ergebnis

Der Ornithopter flog **autonome Wegpunktmissionen ohne GPS**. Das Projekt erhielt die **einzige Note A** im Jahrgang; ein Zeitschriftenartikel ist in Begutachtung.
