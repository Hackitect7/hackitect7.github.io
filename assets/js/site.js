(function () {
  // Бургер
  window.toggleNav = function () {
    const nav = document.getElementById("siteNav");
    const btn = document.querySelector(".hamburger");
    const opened = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", opened ? "true" : "false");
  };

  // Языковой дропдаун
  window.toggleDropdown = function () {
    const el = document.getElementById("langDropdown");
    el && el.classList.toggle("show");
    const btn = document.querySelector(".dropbtn");
    btn &&
      btn.setAttribute(
        "aria-expanded",
        el.classList.contains("show") ? "true" : "false"
      );
  };

  // Клик вне dropdown — закрыть
  window.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      const dd = document.getElementById("langDropdown");
      if (dd && dd.classList.contains("show")) dd.classList.remove("show");
    }
  });

  // Mobile TOC drawer (кнопка .toc-toggle)
  const tocToggle = document.querySelector(".toc-toggle");
  const tocDrawer = document.querySelector(".toc-drawer");
  if (tocToggle && tocDrawer) {
    tocToggle.addEventListener("click", () => {
      tocDrawer.classList.toggle("open");
      tocToggle.setAttribute(
        "aria-expanded",
        tocDrawer.classList.contains("open") ? "true" : "false"
      );
    });

    // Авто-закрытие при клике по ссылке
    tocDrawer.addEventListener("click", (e) => {
      if (e.target.matches("a[href^='#']")) {
        tocDrawer.classList.remove("open");
        tocToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // При ресайзе шире брейкпоинта — закрыть моб. меню и дропдаун
  const breakpoint = 980;
  window.addEventListener("resize", () => {
    if (window.innerWidth > breakpoint) {
      const nav = document.getElementById("siteNav");
      const dd = document.getElementById("langDropdown");
      const burger = document.querySelector(".hamburger");
      if (nav) nav.classList.remove("open");
      if (dd) dd.classList.remove("show");
      if (burger) burger.setAttribute("aria-expanded", "false");
    }
  });
})();
