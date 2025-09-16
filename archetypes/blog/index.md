---
# === BASIC META ===
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .Name | urlize }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
description: "One-sentence meta description (150–160 chars)."
robots: "index,follow"
translationKey: "{{ .Name }}"
type: "blog"
layout: "blog/single"

# === TAXONOMY ===
tags: []
categories: []

# === VISUALS ===
# Если рядом с index.md есть cover.png/jpg/webp — Hugo подтянет через resources
resources:
  - src: "cover.*"
    name: "cover"
    title: "Cover image"
    params:
      alt: ""
# Можно явно указать
# featuredImage: "/assets/img/blog/{{ .Name }}-cover.png"
# coverAlt: "Alt text for social/SEO"

# === SCHEMA.ORG ===
schema:
  type: "BlogPosting"
  author: "Aleksei Polovinkin"
  headline: "{{ replace .Name "-" " " | title }}"
  image: "/assets/img/blog/{{ .Name }}-cover.png"
  datePublished: "{{ .Date }}"
  dateModified: "{{ .Date }}"
  keywords: []
  # canonical: ""   # если нужно сослаться на внешний источник

# === CUSTOM/OPTIONAL ===
# ogImage: ""       # Override social preview
# aliases: []       # Старые URL
# series: ""        # Если посты объединены в серию
---
