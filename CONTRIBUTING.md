# 🤝 Contributing Guidelines

Welcome! Thank you for your interest in contributing to **Hackitect7 — The Music of Systems**.

We value transparency, structure, and professionalism. Please follow the rules below to ensure smooth collaboration.

---

## 🧭 How to Contribute

1. **Fork the repository** and create your feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Commit changes** with clear, conventional messages:

   ```bash
   git commit -m "feat(blog): add post about scalable architectures"
   ```

3. **Push your branch**:

   ```bash
   git push origin feature/amazing-feature
   ```

4. **Open a Pull Request** and describe your changes.

---

## 📂 Project Structure

- `content/` → Markdown for pages (multilingual)
- `locales/` → YAML localization files per language
- `layouts/` → Hugo templates (list, single, partials)
- `assets/` → JS, SCSS, images
- `static/` → static files (CNAME, vCard, favicons)
- `config/` → Hugo configs for environments

---

## 🧑‍💻 Coding Guidelines

- **Style**: Follow Prettier + Stylelint config already included.
- **Commit messages**: Use [Conventional Commits](https://www.conventionalcommits.org/).
- **YAML/Markdown**: Keep clean indentation (2 spaces).
- **Multilingual content**: Always provide keys in `locales/<lang>/` instead of hardcoding text.

---

## ✅ Pull Request Checklist

- [ ] Code builds without errors (`hugo server` works)
- [ ] No broken links or missing localization keys
- [ ] Lint passes for CSS/JS/YAML/Markdown
- [ ] Docs updated (if applicable)

---

## 📖 Resources

- [Hugo Docs](https://gohugo.io/documentation/)
- [Hackitect7 DevOps Cheat Sheet](https://github.com/Hackitect7/devops-cheat-sheet)
