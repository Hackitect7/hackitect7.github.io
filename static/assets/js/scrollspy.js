(function () {
  const tocs = document.querySelectorAll(".toc-spy");
  if (!tocs.length) return;

  // Секции для отслеживания
  let targets = Array.from(document.querySelectorAll(".spy-section[id]"));
  // Если вдруг секций с классом нет — попытаемся собрать по ссылкам
  function idsFromLinks(links) {
    return Array.from(links)
      .map((a) => decodeURIComponent((a.getAttribute("href") || "").slice(1)))
      .filter(Boolean);
  }

  // Для каждой копии TOC (десктоп/мобайл) свой небольшой обработчик — норм
  tocs.forEach((toc) => {
    const links = toc.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    const linkById = new Map();
    links.forEach((a) => {
      const id = decodeURIComponent((a.getAttribute("href") || "").slice(1));
      if (id) linkById.set(id, a);
    });

    if (!targets.length) {
      const ids = idsFromLinks(links);
      targets = ids.map((id) => document.getElementById(id)).filter(Boolean);
    }
    if (!targets.length) return;

    // Подсветка + доступность + автопрокрутка самого TOC
    function setActive(id) {
      links.forEach((a) => {
        const aid = decodeURIComponent((a.getAttribute("href") || "").slice(1));
        const on = aid === id;
        a.classList.toggle("is-active", on);    // новый класс
        a.classList.toggle("active", on);       // на всякий случай оставим старый
        a.setAttribute("aria-current", on ? "true" : "false");
        if (on) a.scrollIntoView({ block: "nearest" });
      });
    }

    // Мгновенная подсветка при клике
    links.forEach((a) =>
      a.addEventListener("click", () => {
        const id = decodeURIComponent((a.getAttribute("href") || "").slice(1));
        if (id) setActive(id);
      })
    );

    // Скролл-спай по центральной «сладкой зоне»
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActive(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    targets.forEach((t) => observer.observe(t));

    // Инициализация, если пришли с #якорем
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      if (linkById.has(id)) setActive(id);
    }
  });

  // Чтобы якорь не уезжал под фикс-хедер (если он есть)
  document.querySelectorAll(".spy-section").forEach((el) => {
    if (!el.style.scrollMarginTop) el.style.scrollMarginTop = "80px";
  });
})();
