import { mainHeader, body, p} from "./components/dom.js";

window.addEventListener('load', function() {
  body.appendChild(mainHeader);
  mainHeader.setAttribute('class', 'mainHeader');
  mainHeader.appendChild(p);
  p.innerHTML = 'Wild Nothing';
})

export { mainHeader };
export { body };
