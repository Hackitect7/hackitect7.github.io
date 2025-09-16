---
title: "DevOps Cheat Sheet — Dans les coulisses"
slug: "devops-cheat-sheet-behind-the-scenes"
description: "Comment le DevOps Cheat Sheet multilingue est construit avec Quarto, l’i18n basé sur YAML (27+ langues) et GitHub Actions CI/CD."
date: 2025-09-05
lastmod: 2025-09-05
draft: false
type: "blog" # pour les templates ; JSON-LD reconnaîtra BlogPosting
tags: ["devops", "quarto"]
categories: ["notes-d-ingénierie"]

# Média/SEO
# cover: "cover.png"         # place le fichier à côté (Page Bundle)
# coverAlt: "Quarto + YAML i18n + pipeline GitHub Actions pour le DevOps Cheat Sheet"
# featuredImage: "/assets/img/og/devops-cheat-sheet-bts.png"  # carte sociale (optionnel)
# canonical: ""              # si une URL canonique existe, indique-la ; sinon laisse vide
robots: "index,follow"

# Précisions JSON-LD (complètent les valeurs par défaut)
schema:
  type: "BlogPosting"
  # possibilité d’ajouter une FAQ si souhaité :
  # faq:
  #   - q: "Pourquoi Quarto ?"
  #     a: "Il fournit une documentation reproductible, de bons blocs de code et des builds multi-format."
author: "Aleksei Polovinkin"
---

Le projet **DevOps Cheat Sheet** n’est pas seulement une page statique — c’est une base de connaissances vivante et multilingue.

Quelques points clés sur sa construction :

- Quarto pour une rédaction de contenu flexible
- Dictionnaires YAML pour la localisation en 27 langues
- GitHub Actions pour le CI/CD et les builds automatiques

Ce mélange me permet de maintenir la cohérence entre toutes les traductions tout en gardant le contenu modulaire et facile à étendre.

👉 Curieux ? Découvrez [le dépôt GitHub](https://github.com/Hackitect7/devops-cheat-sheet).
