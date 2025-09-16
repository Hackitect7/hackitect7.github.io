---
# ===== Basics =====
title: "{{ replace .Name "-" " " | title }}"
# ВНИМАНИЕ: slug должен быть kebab-case (без пробелов/капса)
slug: "{{ .Name | urlize }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true

# Тип и шаблон вывода (твои layout'ы уже ждут type=blog)
type: "blog"
layout: "blog/single"

# Для связки переводов одного и того же поста в разных языках
translationKey: "{{ .Name }}"

# ===== SEO =====
description: ""        # 150–160 символов для сниппета
summary: ""            # краткая аннотация (если хочешь отдельно от description)
robots: "index,follow" # можно "noindex,follow"
canonical: ""          # если нужен канонический URL на другой язык/домен
aliases: []            # старые URL для 301-редиректов, пример: ["/old-url/"]

# ===== Таксономии =====
tags: []               # ["devops", "kubernetes"]
categories: []         # ["Architecture", "Notes"]
series: []             # ["Platform Journey"]

# ===== Авторство =====
author: "Aleksei Polovinkin"
# coauthors:
#   - "Name One"
#   - "Name Two"

# ===== Медиа / карточки соцсетей =====
# Если одна картинка — заполни featuredImage (исп-ся в OG/Twitter).
# Для «героя» внутри текста используй cover (+ alt/credit при желании).
featuredImage: ""                    # "/assets/img/blog/{{ .Name }}-card.jpg"
# cover: "/assets/img/blog/{{ .Name }}-cover.jpg"
# coverAlt: "Short accessible description"
# coverCredit: "Photo by … / Source …"

# ===== Тогглы контента (на будущее; шаблон их не требует, но пусть будут) =====
# toc: true           # если добавишь вывод оглавления в шаблоне
# comments: false
# hideMeta: false

# ===== Встроенный CTA (не обязателен; шаблон сейчас не читает, но задел полезный) =====
# cta:
#   text: "Contact me"
#   href: "/us/contacts/?utm_source=blog&utm_medium=post&utm_campaign={{ .Name | urlize }}"

# ===== Доп. данные для structured data (JSON-LD) =====
schema:
  type: "BlogPosting"
  headline: "{{ replace .Name "-" " " | title }}"
  image: ""                  # если хочешь явно указать картинку для JSON-LD
  author: "Aleksei Polovinkin"
  datePublished: "{{ .Date }}"
  dateModified: "{{ .Date }}"
  keywords: []               # ["DevOps","Kubernetes","Observability"]
  # faq:
  #   - q: "Question?"
  #     a: "Answer."

# ===== Соцсети (если когда-нибудь понадобятся точечно) =====
# social:
#   twitterCard: "summary_large_image"
#   twitterCreator: "@hackitect7"
---
