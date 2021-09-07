import Sub from "./sub";
import Icon from "../images/header_bg.png";

function component() {
  const element = document.createElement("div");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
