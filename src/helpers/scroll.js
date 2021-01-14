export const getElementPosition = (element) => {
  /**
   * Element we want to get the Y position from
   * @type {Element}
   */
  let el = element;

  /**
   * Start Y position
   * @type {number}
   */
  let yPos = 0;

  while (el) {
    yPos += (el.offsetTop + el.clientTop);
    el = el.offsetParent;
  }

  return yPos;
};

export const scrollTo = (elementQuery) => {
  const elementToScrollTo = document.querySelector(elementQuery);
  const positionToScrollTo = !elementToScrollTo ? 0 : getElementPosition(elementToScrollTo);
  window.scrollTo(0, positionToScrollTo - 50);
};
