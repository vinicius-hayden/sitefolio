import { mainHeader } from "./components/dom.js";
import { body } from "./components/dom.js";

window.addEventListener('load', function() {
  body.appendChild(mainHeader);
  mainHeader.setAttribute('class', 'mainHeader');
  mainHeader.innerText = 'Wild Nothing';
})

export { mainHeader };
export { body };
