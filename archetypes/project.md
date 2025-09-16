---
# === BASIC ===
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .TranslationBaseName }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
description: "Outcome-focused summary (150–160 chars)."
robots: "index,follow"
translationKey: "{{ .TranslationBaseName }}"
type: "projects"
layout: "projects/single"

# === TAXONOMY (optional) ===
tags: ["Projects"]
categories: ["Projects"]

# === VISUALS ===
featuredImage: "/assets/img/projects/{{ .TranslationBaseName }}/cover.png"
resources:
  - src: "cover.*"
    name: "cover"
    title: "Cover image"
    params: { alt: "" }
  - src: "gallery/*"
    name: "gallery"
    title: "Gallery images"

# === BUSINESS CONTEXT ===
client: ""
industry: ""
role: ""
period: ""
stack: []

# === METRICS/OUTCOMES ===
outcomes:
  - "MTTR ↓ 35%"
  - "Deploys/week ↑ x3"
  - "Infra spend ↓ 22%"

# === SCHEMA.ORG ===
schema:
  type: "CreativeWork"   # или "CaseStudy"
  headline: "{{ replace .Name "-" " " | title }}"
  datePublished: "{{ .Date }}"
  dateModified: "{{ .Date }}"
  # image: "/assets/img/projects/{{ .TranslationBaseName }}/cover.png"
  # canonical: ""

# === CTA (optional) ===
cta:
  text: "Discuss a similar project"
  campaign: "proj-{{ .TranslationBaseName }}"
---
## Context
<!-- Problem statement / constraints -->

## Approach
<!-- Architecture / process / decisions -->

## Results
- …

## Screenshots
<!-- Use resources or static paths -->
