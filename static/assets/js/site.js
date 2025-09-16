(function () {
  // Бургер
  window.toggleNav = function () {
    const nav = document.getElementById("siteNav");
    const btn = document.querySelector(".hamburger");
    const opened = nav.classList.toggle("open");
    if (btn) btn.setAttribute("aria-expanded", opened ? "true" : "false");
  };

  // Языковой дропдаун
  window.toggleDropdown = function () {
    const el = document.getElementById("langDropdown");
    if (el) el.classList.toggle("show");
    const btn = document.querySelector(".dropbtn");
    if (btn) {
      btn.setAttribute("aria-expanded", el && el.classList.contains("show") ? "true" : "false");
    }
  };

  // Клик вне dropdown — закрыть
  window.addEventListener(
    "click",
    function (e) {
      if (!e.target.closest(".dropdown")) {
        const dd = document.getElementById("langDropdown");
        if (dd && dd.classList.contains("show")) dd.classList.remove("show");
        const btn = document.querySelector(".dropbtn");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    },
    { passive: true }
  );

  // При ресайзе шире брейкпоинта — закрыть моб. меню и дропдаун
  const BREAKPOINT = 980;
  window.addEventListener("resize", () => {
    if (window.innerWidth > BREAKPOINT) {
      const nav = document.getElementById("siteNav");
      const dd = document.getElementById("langDropdown");
      const burger = document.querySelector(".hamburger");
      if (nav) nav.classList.remove("open");
      if (dd) dd.classList.remove("show");
      if (burger) burger.setAttribute("aria-expanded", "false");
    }
  });
})();
