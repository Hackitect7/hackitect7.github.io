---
title: "DevOps 速查表 — 幕后故事"
slug: "devops-cheat-sheet-behind-the-scenes"
description: "多语言 DevOps 速查表是如何通过 Quarto、基于 YAML 的 i18n（27+ 种语言）以及 GitHub Actions CI/CD 构建的。"
date: 2025-09-05
lastmod: 2025-09-05
draft: false
type: "blog" # 用于模板；JSON-LD 会识别为 BlogPosting
tags: ["devops", "quarto"]
categories: ["工程笔记"]

# 媒体/SEO
# cover: "cover.png"        # 将文件放在同一目录（Page Bundle）
# coverAlt: "Quarto + YAML i18n + GitHub Actions 管道 — DevOps 速查表"
# featuredImage: "/assets/img/og/devops-cheat-sheet-bts.png"  # 社交卡片（可选）
# canonical: ""             # 如有规范 URL，请填写；否则留空
robots: "index,follow"

# JSON-LD 细化（补充默认值）
schema:
  type: "BlogPosting"
  # 可以在此添加 FAQ：
  # faq:
  #   - q: "为什么选择 Quarto？"
  #     a: "它提供可复现的文档、优秀的代码块支持，以及多格式构建能力。"
author: "Aleksei Polovinkin"
---

**DevOps 速查表** 项目并不仅仅是一个静态页面 ——
它是一个动态的、多语言的知识库。

一些构建亮点：

- 使用 Quarto 进行灵活的内容创作
- 使用 YAML 词典实现 27 种语言的本地化
- 使用 GitHub Actions 实现 CI/CD 和自动构建

这种组合让我能够在保持所有翻译一致性的同时，保证内容模块化、易于扩展。

👉 想了解更多？请查看 [GitHub 仓库](https://github.com/Hackitect7/devops-cheat-sheet)。
