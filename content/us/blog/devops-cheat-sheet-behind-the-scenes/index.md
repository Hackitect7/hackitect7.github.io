---
title: "DevOps Cheat Sheet — Behind the Scenes"
slug: "devops-cheat-sheet-behind-the-scenes"
description: "How the multilingual DevOps Cheat Sheet is built with Quarto, YAML-based i18n (27+ languages), and GitHub Actions CI/CD."
date: 2025-09-05
lastmod: 2025-09-05
draft: false
type: "blog"               # для шаблонов; JSON-LD подхватит BlogPosting
tags: ["devops", "quarto"]
categories: ["engineering-notes"]

# Медиа/SEO
# cover: "cover.png"         # положи файл рядом (Page Bundle)
# coverAlt: "Quarto + YAML i18n + GitHub Actions pipeline for the DevOps Cheat Sheet"
# featuredImage: "/assets/img/og/devops-cheat-sheet-bts.png"  # соц-карточка (опционально)
# canonical: ""              # если есть канонический URL — укажи его; иначе оставь пустым
robots: "index,follow"

# JSON-LD уточнения (дополняют дефолты)
schema:
  type: "BlogPosting"
  # можно добавить FAQ при желании:
  # faq:
  #   - q: "Why Quarto?"
  #     a: "It gives reproducible docs, good code blocks, and multi-format builds."
author: "Aleksei Polovinkin"
---

The **DevOps Cheat Sheet** project is not just a static page — it’s a living, multilingual knowledge base.

Some highlights of how it’s built:

- Quarto for flexible content authoring
- YAML dictionaries for localization into 27 languages
- GitHub Actions for CI/CD and automatic builds

This mix allows me to maintain consistency across all translations, while keeping the content modular and easy to extend.

👉 Curious? Check out [the GitHub repo](https://github.com/Hackitect7/devops-cheat-sheet).
