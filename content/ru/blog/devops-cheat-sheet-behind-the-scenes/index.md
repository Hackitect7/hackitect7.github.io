---
title: "DevOps Cheat Sheet — закулисье"
slug: "devops-cheat-sheet-behind-the-scenes"
description: "Как построен многоязычный DevOps Cheat Sheet с помощью Quarto, YAML-локализации (27+ языков) и GitHub Actions CI/CD."
date: 2025-09-05
lastmod: 2025-09-05
draft: false
type: "blog" # для шаблонов; JSON-LD подхватит BlogPosting
tags: ["devops", "quarto"]
categories: ["инженерные заметки"]

# Медиа/SEO
# cover: "cover.png"         # положи файл рядом (Page Bundle)
# coverAlt: "Quarto + YAML i18n + GitHub Actions pipeline для DevOps Cheat Sheet"
# featuredImage: "/assets/img/og/devops-cheat-sheet-bts.png"  # соц-карточка (опционально)
# canonical: ""              # если есть канонический URL — укажи его; иначе оставь пустым
robots: "index,follow"

# JSON-LD уточнения (дополняют дефолты)
schema:
  type: "BlogPosting"
  # можно добавить FAQ при желании:
  # faq:
  #   - q: "Почему Quarto?"
  #     a: "Он обеспечивает воспроизводимые документы, хорошие блоки кода и сборку в разных форматах."
author: "Алексей Половинкин"
---

Проект **DevOps Cheat Sheet** — это не просто статическая страница, а живая, многоязычная база знаний.

Некоторые ключевые моменты того, как он устроен:

- Quarto для гибкой работы с контентом
- YAML-словари для локализации на 27 языков
- GitHub Actions для CI/CD и автоматических сборок

Такое сочетание позволяет сохранять единообразие во всех переводах, при этом контент остаётся модульным и легко расширяемым.

👉 Интересно? Загляните в [репозиторий на GitHub](https://github.com/Hackitect7/devops-cheat-sheet).
