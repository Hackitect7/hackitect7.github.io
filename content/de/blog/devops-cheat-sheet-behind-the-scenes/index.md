---
title: "DevOps Cheat Sheet — Hinter den Kulissen"
slug: "devops-cheat-sheet-behind-the-scenes"
description: "Wie das mehrsprachige DevOps Cheat Sheet mit Quarto, YAML-basierter i18n (27+ Sprachen) und GitHub Actions CI/CD aufgebaut ist."
date: 2025-09-05
lastmod: 2025-09-05
draft: false
type: "blog" # für Templates; JSON-LD erkennt BlogPosting
tags: ["devops", "quarto"]
categories: ["engineering-notes"]

# Medien/SEO
# cover: "cover.png"         # Datei daneben ablegen (Page Bundle)
# coverAlt: "Quarto + YAML i18n + GitHub Actions-Pipeline für das DevOps Cheat Sheet"
# featuredImage: "/assets/img/og/devops-cheat-sheet-bts.png"  # Social Card (optional)
# canonical: ""              # falls es eine kanonische URL gibt; sonst leer lassen
robots: "index,follow"

# JSON-LD-Ergänzungen (erweitern Defaults)
schema:
  type: "BlogPosting"
  # man kann optional ein FAQ hinzufügen:
  # faq:
  #   - q: "Warum Quarto?"
  #     a: "Es bietet reproduzierbare Dokumente, gute Codeblöcke und Multi-Format-Builds."
author: "Aleksei Polovinkin"
---

Das Projekt **DevOps Cheat Sheet** ist nicht nur eine statische Seite — es ist eine lebendige, mehrsprachige Wissensbasis.

Einige Highlights, wie es aufgebaut ist:

- Quarto für flexibles Authoring von Inhalten
- YAML-Wörterbücher für die Lokalisierung in 27 Sprachen
- GitHub Actions für CI/CD und automatische Builds

Diese Mischung ermöglicht es mir, Konsistenz über alle Übersetzungen hinweg zu bewahren und gleichzeitig die Inhalte modular und leicht erweiterbar zu halten.

👉 Neugierig? Schau dir [das GitHub-Repository](https://github.com/Hackitect7/devops-cheat-sheet) an.
