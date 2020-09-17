// When the text is too big or too small
// Use this script to make it visible for all

// If the font is hurting your eyes
// Use this script to change the size

const fontSizer = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) { return; }
  let initialFontSize = localStorage.getItem("initialFontSize");
  let currentFontSize = localStorage.getItem("currentFontSize");

  const storeSizes = () => {
    localStorage.setItem("initialFontSize", initialFontSize);
    localStorage.setItem("currentFontSize", currentFontSize);
  }
  const addButton = (onClickFunction, linkText, className) => {
    const link = document.createElement("button");
    link.classList.add(className);
    link.appendChild(document.createTextNode(linkText));
    link.addEventListener("click", onClickFunction);
    element.appendChild(link);
  }

  const setBodySize = () => {
    document.body.style.fontSize = `${currentFontSize}em`;
    storeSizes()
  }
  const increment = () => {
    currentFontSize = currentFontSize*1.25;
    setBodySize();
  }
  const decrement = () => {
    currentFontSize = currentFontSize*0.8;
    setBodySize();
  }
  const reset = () => {
    currentFontSize = initialFontSize;
    setBodySize();
  }

  if (initialFontSize) {
    initialFontSize = parseFloat(initialFontSize);
    currentFontSize = parseFloat(currentFontSize);
    setBodySize();
  } else {
    const el = document.createElement('span');
    el.innerHTML = "&nbsp;";
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.style.lineHeight = "1em";
    document.body.insertBefore(el,document.body.firstChild);
    currentFontSize = initialFontSize = el.offsetHeight/16;
    el.remove();
    storeSizes();
  }

  addButton(increment,"A+","increaseSize");
  addButton(reset,"R","resetSize");
  addButton(decrement,"A-","decreaseSize");
}

window.addEventListener("DOMContentLoaded", () => {
  fontSizer("fontControls");
});