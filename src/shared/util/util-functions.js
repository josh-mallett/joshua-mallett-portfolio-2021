export const doHorizontalScroll = (el, event) => {
  if (isScrolledIntoView(el)) {
    if (event.deltaY > 0) document.body.style.overflow = "hidden";
    else { if (el.scrollLeft <= 0) document.body.style.overflow = ""; }
    el.scrollLeft += event.deltaY;
  }
};

export const isScrolledIntoView = (el) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
};
