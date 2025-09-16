---
title: "DevOps Cheat Sheet — Entre Bastidores"
slug: "devops-cheat-sheet-behind-the-scenes"
description: "Cómo se construye la DevOps Cheat Sheet multilingüe con Quarto, i18n basado en YAML (27+ idiomas) y GitHub Actions CI/CD."
date: 2025-09-05
lastmod: 2025-09-05
draft: false
type: "blog" # para plantillas; JSON-LD detectará BlogPosting
tags: ["devops", "quarto"]
categories: ["notas-de-ingeniería"]

# Medios/SEO
# cover: "cover.png"         # coloca el archivo al lado (Page Bundle)
# coverAlt: "Quarto + YAML i18n + pipeline de GitHub Actions para DevOps Cheat Sheet"
# featuredImage: "/assets/img/og/devops-cheat-sheet-bts.png"  # tarjeta social (opcional)
# canonical: ""              # si hay URL canónica — indícala; si no, dejar vacío
robots: "index,follow"

# JSON-LD detalles (complementan los valores por defecto)
schema:
  type: "BlogPosting"
  # se puede añadir FAQ si se desea:
  # faq:
  #   - q: "¿Por qué Quarto?"
  #     a: "Ofrece documentos reproducibles, buenos bloques de código y compilaciones multi-formato."
author: "Aleksei Polovinkin"
---

El proyecto **DevOps Cheat Sheet** no es solo una página estática — es una base de conocimiento multilingüe y viva.

Algunos aspectos destacados de cómo está construido:

- Quarto para una autoría de contenido flexible
- Diccionarios YAML para localización en 27 idiomas
- GitHub Actions para CI/CD y compilaciones automáticas

Esta combinación me permite mantener la coherencia en todas las traducciones, mientras conservo el contenido modular y fácil de ampliar.

👉 ¿Tienes curiosidad? Mira el [repositorio en GitHub](https://github.com/Hackitect7/devops-cheat-sheet).
