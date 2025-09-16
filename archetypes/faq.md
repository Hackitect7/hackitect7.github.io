---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .TranslationBaseName }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
description: "FAQ: quick answers to common questions."
robots: "index,follow"
translationKey: "{{ .TranslationBaseName }}"
type: "page"
layout: "_default/single"

schema:
  type: "FAQPage"
  faq:
    - q: "Do you work globally?"
      a: "Yes, I work across time zones with async-first collaboration."
    - q: "How do we start?"
      a: "We begin with a short intro call to map goals, scope, and access."
---
<!--
Тело страницы можно оставить пустым: твоий `seo-jsonld.html` сможет вывести FAQ из front matter.
Либо продублировать вопросы/ответы в виде Markdown ниже.
-->
