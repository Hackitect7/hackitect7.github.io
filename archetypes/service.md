---
# === BASIC ===
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .TranslationBaseName }}"
description: "One-sentence, benefits-oriented promise (150–160 chars)."
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true

# Основное изображение (OG/Twitter). Если не нужно — оставь пустым.
featuredImage: "/assets/img/services/{{ .TranslationBaseName }}-card.png"
robots: "index,follow"
canonical: ""   # если есть канонический URL

# === TAXONOMY (optional) ===
tags: ["Services", "{{ .TranslationBaseName }}"]
categories: ["Services"]

# === CTA ===
cta:
  text: "Book an intro call"
  # будет использоваться в UTM-метках; по умолчанию = slug
  campaign: "svc-{{ .TranslationBaseName }}"

# === SCHEMA.ORG ===
schema:
  type: "Service"
  headline: "{{ replace .Name "-" " " | title }}"
  author: "Aleksei Polovinkin"
  # Укажи price, если нужно отобразить Offer
  price: "from $1500"
  image: "/assets/img/services/{{ .TranslationBaseName }}-card.png"
  datePublished: "{{ .Date }}"
  dateModified: "{{ .Date }}"
  keywords: ["Consulting","Audit","DevOps"]
  faq:
    - q: "What deliverables do I receive?"
      a: "Executive summary, technical report with ranked risks, and a 30–60–90 day roadmap."
    - q: "How long does it take?"
      a: "Typically 5–10 business days after access is arranged."
    - q: "Do you help implement the fixes?"
      a: "Yes. Implementation support and coaching are available as a follow-up engagement."

# === CUSTOM (optional) ===
# ogImage: ""   # override social image
# aliases: []   # ["/old-service-url/"]
---

## Who is this service for
<!-- Target audience and pains (3–5 bullets). Keep it business-oriented. -->
- CTOs who need independent review
- Startups scaling infra fast
- Enterprises migrating to cloud

---

## Problems we solve
<!-- Pain points phrased as outcomes; 4–7 bullets. -->
- Unclear cost drivers in infra spend
- Slow release cycles due to manual ops
- Lack of visibility into risks

---

## What you get (deliverables)

- Executive summary for leadership
- Technical risk register with priorities
- 30–60–90 day remediation roadmap

---

## How it works (process)

1. **Discovery & access** — align goals, gather access
2. **Review** — analyze systems, metrics, configs
3. **Report & roadmap** — deliver findings + plan

---

## Typical outcomes (metrics)

- **MTTR ↓ 40%**, **alert noise ↓ 70%**
- **Infra spend ↓ 20%** via rightsizing
- **Deploys/week ↑**, **change failure rate ↓**

---

## Optional add-ons

- Implementation support / coaching
- Workshops / enablement

---

## FAQ

**What access do you need?**
Minimal read-only access to monitoring + IaC repos.

**Do you support regulated environments (PCI/SOC2/ISO)?**
Yes, with NDA and secure access process.
