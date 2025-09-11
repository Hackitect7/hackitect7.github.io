(function () {
  const tocs = document.querySelectorAll(".toc-spy");
  if (!tocs.length) return;

  tocs.forEach((toc) => {
    const links = toc.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    const linkById = new Map();
    links.forEach((a) => {
      const id = decodeURIComponent(a.getAttribute("href").slice(1));
      linkById.set(id, a);
    });

    let targets = Array.from(document.querySelectorAll(".spy-section[id]"));
    if (!targets.length) {
      targets = Array.from(linkById.keys())
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    }
    if (!targets.length) return;

    function clearActive() {
      links.forEach((a) => a.classList.remove("active"));
    }
    function activate(id) {
      clearActive();
      const a = linkById.get(id);
      if (a) a.classList.add("active");
    }

    links.forEach((a) =>
      a.addEventListener("click", () => {
        const id = decodeURIComponent(a.getAttribute("href").slice(1));
        activate(id);
      })
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) activate(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    targets.forEach((t) => observer.observe(t));

    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      if (linkById.has(id)) activate(id);
    }
  });
})();
