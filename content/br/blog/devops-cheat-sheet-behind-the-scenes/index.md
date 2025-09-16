---
title: "DevOps Cheat Sheet — Por Trás dos Bastidores"
slug: "devops-cheat-sheet-behind-the-scenes"
description: "Como o DevOps Cheat Sheet multilíngue é construído com Quarto, i18n baseado em YAML (27+ idiomas) e GitHub Actions CI/CD."
date: 2025-09-05
lastmod: 2025-09-05
draft: false
type: "blog" # para templates; JSON-LD assume BlogPosting
tags: ["devops", "quarto"]
categories: ["engineering-notes"]

# Mídia/SEO
# cover: "cover.png"         # coloque o arquivo ao lado (Page Bundle)
# coverAlt: "Quarto + YAML i18n + pipeline do GitHub Actions para o DevOps Cheat Sheet"
# featuredImage: "/assets/img/og/devops-cheat-sheet-bts.png"  # cartão social (opcional)
# canonical: ""              # se houver URL canônico — indique; caso contrário deixe vazio
robots: "index,follow"

# JSON-LD adicionais (complementam os padrões)
schema:
  type: "BlogPosting"
  # você pode adicionar um FAQ se quiser:
  # faq:
  #   - q: "Por que Quarto?"
  #     a: "Oferece documentação reprodutível, bons blocos de código e builds em múltiplos formatos."
author: "Aleksei Polovinkin"
---

O projeto **DevOps Cheat Sheet** não é apenas uma página estática — é uma base de conhecimento viva e multilíngue.

Alguns destaques de como ele é construído:

- Quarto para autoria flexível de conteúdo
- Dicionários YAML para localização em 27 idiomas
- GitHub Actions para CI/CD e builds automáticos

Essa combinação me permite manter consistência em todas as traduções, enquanto mantém o conteúdo modular e fácil de expandir.

👉 Ficou curioso? Confira o [repositório no GitHub](https://github.com/Hackitect7/devops-cheat-sheet).
