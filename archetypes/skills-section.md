---
title: "Skills"
slug: "skills"
description: "Capabilities across architecture, DevOps, SRE, security, and automation."
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
robots: "index,follow"
translationKey: "skills-section"
type: "skills"
layout: "skills/list"

featuredImage: "/assets/img/og/skills-section.png"

# Для удобной отрисовки в твоём шаблоне:
levels:
  expert: "Expert"
  advanced: "Advanced"
  intermediate: "Intermediate"
  basic: "Basic"

segments:
  - id: "architecture"
    title: "Architecture"
    text: "Systems design, platform thinking, cost & resilience."
    groups:
      - h: "Core"
        level: "expert"
        items: ["Systems Design", "Hybrid Cloud", "Networking", "Security Baselines"]
      - h: "Practices"
        level: "advanced"
        items: ["C4 modeling", "ADR", "Runbooks"]

  - id: "devops"
    title: "DevOps & Automation"
    text: "Pipelines, IaC, GitOps."
    groups:
      - h: "Pipelines"
        level: "expert"
        items: ["GitHub Actions", "GitLab CI"]
      - h: "IaC"
        level: "advanced"
        items: ["Terraform", "Ansible"]

cta:
  title: "Want this skillset on your project?"
  text: "Let’s apply the right tools and patterns to your environment."
  buttonText: "Contact me"
  buttonHref: "/contacts/"
---
