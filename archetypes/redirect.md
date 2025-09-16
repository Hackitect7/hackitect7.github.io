---
# Страница-заглушка для переноса URL (сохраняем SEO)
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .TranslationBaseName }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
description: ""
robots: "noindex,follow"
type: "page"
layout: "_default/single"

# Укажите старые/новые пути
aliases:
  - "/old-path/"
# canonical: "https://new-domain/new-path/" # при необходимости
---
This page has moved.
