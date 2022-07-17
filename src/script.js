import { banner, body, p} from "./components/dom.js";
import { header, nav, a, ul, li, liA } from "./components/navbar.js"

window.addEventListener('load', function() {

  body.appendChild(header);
  header.appendChild(nav);
  nav.appendChild(a);
  a.setAttribute('class', 'logo');
  a.setAttribute('class', '/');

  nav.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(liA);
  liA.setAttribute('href', '/');
  liA.innerText = 'Songs';
  body.appendChild(banner);
  banner.setAttribute('class', 'banner');
  banner.appendChild(p);
  p.innerHTML = 'Wild Nothing';
})
