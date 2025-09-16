(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastY = window.scrollY || 0;
  let pinned = true; // сейчас показан
  let ticking = false;

  // Небольшая гистерезис-логика:
  const hideThreshold = 8; // нужно прокрутить вниз минимум на 8px, чтобы спрятать
  const showThreshold = 12; // и на 12px вверх — чтобы показать
  const minScrollToHide = 64; // не прячем, пока не ушли хотя бы на 64px от верха

  function onScroll() {
    const y = window.scrollY || 0;
    const delta = y - lastY;

    // метка «у самого верха»
    if (y <= 2) {
      header.classList.add("at-top");
    } else {
      header.classList.remove("at-top");
    }

    // скролл вниз достаточно, мы ниже «кромки» — прячем
    if (delta > hideThreshold && y > minScrollToHide && pinned) {
      header.classList.add("header-hidden");
      header.classList.remove("header-shown");
      pinned = false;
    }

    // скролл вверх достаточно — показываем
    if (delta < -showThreshold && !pinned) {
      header.classList.remove("header-hidden");
      header.classList.add("header-shown");
      pinned = true;
    }

    lastY = y;
    ticking = false;
  }

  function onScrollRaf() {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }

  // начальное состояние
  header.classList.add("header-shown", "at-top");

  window.addEventListener("scroll", onScrollRaf, { passive: true });
})();
