export const getWidthAndHeightText = (
  txt: string,
  fontname: string,
  fontsize: string
): Dimensions => {
  let span = document.createElement("span");
  document.body.appendChild(span);
  span.style.fontSize = fontsize;
  span.style.fontFamily = fontname;
  span.innerText = txt;
  const dimensions = { width: span.offsetWidth, height: span.offsetHeight };
  span.remove()
  return dimensions;
};

type Dimensions = {
  width: number;
  height: number;
};
