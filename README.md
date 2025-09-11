# 🌐 Hackitect7 — Music of Systems

[![Build](https://github.com/Hackitect7/hackitect7-site/actions/workflows/hugo-pages.yml/badge.svg)](https://github.com/Hackitect7/hackitect7-site/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![Hugo](https://img.shields.io/badge/Hugo-extended-important)](https://gohugo.io/) [![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-brightgreen)](https://hackitect7.github.io)

Multilingual personal website and portfolio built with **Hugo Extended**.
Here I publish my projects, blog posts, architecture blueprints, and open‑source tooling.

🔗 **Live site:** [https://hackitect7.github.io](https://hackitect7.github.io)

💼 **Brand:** _Hackitect7 — The Music of Systems_

---

## 🚀 Features

- **Multilingual** (English, Russian, + ready for more)
- **Sections**: About, Services, Projects, Blog, Skills, Contacts
- **Responsive design**, scroll‑spy navigation, accessible UI
- **SEO‑friendly**: JSON‑LD schema, clean permalinks
- **Open Source** projects showcase

---

## 📊 Tech Stack

- [Hugo Extended](https://gohugo.io/) — static site generator
- **GitHub Actions** — CI/CD → GitHub Pages
- **YAML** — structured multilingual dictionaries in `locales/`
- **Custom CSS/JS** — header UX, scroll‑spy, responsive components

---

## 🛠️ Local Development

1. Install **Hugo Extended**: [https://gohugo.io/getting-started/installing/](https://gohugo.io/getting-started/installing/)

2. Clone this repo:

   ```bash
   git clone https://github.com/Hackitect7/hackitect7-site.git
   cd hackitect7-site
   ```

3. Start dev server (future‑dated posts on):

   ```bash
   hugo server --disableFastRender --buildFuture
   ```

Site will be available at [http://localhost:1313/](http://localhost:1313/).

> Tip: Production build locally — `hugo --cleanDestinationDir` (outputs to `public/`).

---

## 🌍 Add a Language

1. Create directory `content/<lang>/` with `_index.md` and section stubs.
2. Add language to `config/_default/languages.toml` (code, name, params like `flag`).
3. Create localization dictionaries in `locales/<lang>/` (e.g., `ui.yaml`, `about.yaml`, `services.yaml`, `projects.yaml`, `skills.yaml`, `blog.yaml`, `contacts.yaml`).

> The site reads dictionaries via `index site.Data $lang "<namespace>"` (see templates). Data root is set with `dataDir = "locales"` in config.

---

## 🚢 Deployment

- Push to **main** → GitHub Actions builds and deploys to **GitHub Pages**.
- Production URL: [https://hackitect7.github.io](https://hackitect7.github.io)
- Custom domain is supported: place `CNAME` in `static/`.

Workflow file: `.github/workflows/hugo-pages.yml`.

---

## 📁 Repository Structure

```
.
├── archetypes/               # Hugo archetypes for new content
│   ├── default.md
│   ├── page.md
│   └── post.md
├── assets/                   # JS, CSS (pre-processed), e.g. ui.js, scrollspy.js
├── config/
│   ├── _default/             # base config (config.toml, params, languages)
│   ├── development/          # overrides for local/dev
│   └── production/           # overrides for CI/prod
├── content/                  # Multilingual content (us/, ru/, ...)
│   ├── us/
│   │   ├── _index.md
│   │   ├── about/ _index.md
│   │   ├── services/ _index.md
│   │   ├── projects/ _index.md
│   │   ├── skills/ _index.md
│   │   └── blog/              # posts (year/month/slug/ or slug/)
│   │       ├── _index.md
│   │       └── <post>/ index.md
│   └── ru/ ...
├── layouts/                  # Templates: list/single/partials per section
│   ├── _default/ baseof.html, list.html, single.html
│   ├── about/ list.html
│   ├── blog/ list.html, single.html
│   ├── projects/ list.html, single.html
│   ├── services/ list.html
│   ├── skills/ list.html
│   └── partials/ head, header, footer, toc, scrollspy, hero ...
├── locales/                  # Dictionaries per language (dataDir)
│   ├── us/ ui.yaml, about.yaml, services.yaml, projects.yaml, skills.yaml, blog.yaml, contacts.yaml
│   └── ru/ ui.yaml, about.yaml, ...
├── static/                   # Static files served as-is (img, vcard, CNAME)
│   ├── assets/css/style.css
│   ├── assets/img/flags ...
│   └── vcard/aleksei.vcf
├── .github/workflows/hugo-pages.yml
├── LICENSE
└── README.md
```

---

## 🧭 Content Conventions

- **Permalinks** (config):

  - Blog — `/blog/:year/:month/:slug/`
  - Projects — `/projects/:slug/`
  - Services — `/services/:slug/`

- **Blog front matter** example:

  ```yaml
  ---
  title: "Welcome to the Hackitect7 Blog"
  date: 2025-09-10
  slug: "welcome-to-the-hackitect7-blog"
  description: "The first entry — ideas, experiments, lessons."
  tags: ["intro", "hackitect7"]
  categories: ["General"]
  type: "blog"
  ---
  ```

- **Language switch** preserves current page when a translation exists (see `header.html` logic for `.Translations`).

---

## 📦 Shortcuts / QR

- vCard — [`/vcard/aleksei.vcf`](./static/vcard/aleksei.vcf)
- Contacts — EN: [https://hackitect7.github.io/us/contacts/](https://hackitect7.github.io/us/contacts/) · RU: [https://hackitect7.github.io/ru/contacts/](https://hackitect7.github.io/ru/contacts/)

---

## 🤝 Contributing

Issues and PRs are welcome. Please follow the style rules (Stylelint, Prettier) and commit meaningful messages.

- See **CONTRIBUTING.md** for branch naming and commit style.
- See **CODE_OF_CONDUCT.md** for community guidelines.

---

## 📌 License

Content © Hackitect7. Code released under the [MIT License](LICENSE).
