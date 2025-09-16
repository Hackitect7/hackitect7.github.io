(function () {
  // ===== Smart header (hide on scroll down, show on scroll up)
  const header = document.getElementById("site-header");
  if (header) {
    let lastY = window.scrollY;
    let ticking = false;
    function onScroll() {
      const y = window.scrollY;
      const goingDown = y > lastY;
      header.classList.toggle("header-hidden", goingDown && y > 80);
      lastY = y;
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ===== Back-to-top
  const topBtn = document.getElementById("backToTop");
  if (topBtn) {
    function vis() {
      if (window.scrollY > 600) topBtn.classList.add("show");
      else topBtn.classList.remove("show");
    }
    window.addEventListener("scroll", vis, { passive: true });
    vis();
    topBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ===== TOC: <details class="toc-mobile"> управление (закрытие по клику вне, Esc, resize, клик по ссылке)
  (function () {
    function closeAllToc() {
      document.querySelectorAll(".toc-mobile[open]").forEach((d) => (d.open = false));
    }

    // Клик/тап вне — закрыть (capture, чтобы сработать раньше)
    document.addEventListener(
      "pointerdown",
      (e) => {
        const opened = document.querySelectorAll(".toc-mobile[open]");
        if (!opened.length) return;
        for (const d of opened) {
          const summary = d.querySelector(".toc-toggle");
          const drawer = d.querySelector(".toc-drawer");
          const t = e.target;
          if ((summary && summary.contains(t)) || (drawer && drawer.contains(t))) continue;
          d.open = false;
        }
      },
      true
    );

    // Esc — закрыть
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllToc();
    });

    // Переход на десктоп — закрыть
    const MOBILE_MAX = 660;
    window.addEventListener("resize", () => {
      if (window.innerWidth > MOBILE_MAX) closeAllToc();
    });

    // Клик по пункту — закрыть родительский details
    document.addEventListener("click", (e) => {
      const a = e.target.closest(".toc-drawer a");
      if (!a) return;
      const d = a.closest(".toc-mobile");
      if (d) d.open = false;
    });
  })();
})();
