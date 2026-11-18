document.addEventListener(
  "wheel",
  (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const panel = event.target.closest(".md-sidebar--secondary .md-nav--secondary");
    const list = panel?.querySelector(":scope > .md-nav__list");
    if (!list || list.contains(event.target) || event.deltaY === 0) {
      return;
    }

    const nextScrollTop = Math.max(
      0,
      Math.min(list.scrollHeight - list.clientHeight, list.scrollTop + event.deltaY),
    );
    if (nextScrollTop === list.scrollTop) {
      return;
    }

    list.scrollTop = nextScrollTop;
    event.preventDefault();
  },
  { passive: false },
);
