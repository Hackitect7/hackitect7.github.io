---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .TranslationBaseName }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
description: "One-sentence meta description (150–160 chars)."
robots: "index,follow"
translationKey: "{{ .TranslationBaseName }}"
type: "page"
layout: "_default/single"

# Taxonomy (optional)
tags: []
categories: []

# Visuals (either explicit or via resources)
# featuredImage: "/assets/img/og/{{ .TranslationBaseName }}-card.png"
resources:
  - src: "cover.*"
    name: "cover"
    title: "Cover image"
    params:
      alt: ""

# JSON-LD
schema:
  type: "WebPage"
  headline: "{{ replace .Name "-" " " | title }}"
  datePublished: "{{ .Date }}"
  dateModified: "{{ .Date }}"
  # canonical: ""
  # ogImage: ""
---
<!-- Write your page content in Markdown below -->
