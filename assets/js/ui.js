(function () {
  // Mobile TOC drawer
  document.querySelectorAll("[data-toc-toggle]").forEach((btn) => {
    const id = btn.getAttribute("data-toc-toggle");
    const drawer = document.getElementById(id);
    if (!drawer) return;

    btn.addEventListener("click", () => {
      drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", drawer.classList.contains("open"));
    });

    drawer.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        drawer.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    // Закрытие по клику вне
    document.addEventListener("click", (e) => {
      if (!drawer.contains(e.target) && !btn.contains(e.target)) {
        drawer.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Smart header (hide on scroll down, show on scroll up)
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
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    });
  }

  // Back-to-top
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
})();
