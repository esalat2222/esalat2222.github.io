import { sheet } from "/js/global-style.js";
let $ = document;

class MenuSite extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(this.createTemplate());
  }
  createTemplate() {
    let template = $.createElement("template");
    template.innerHTML = `
${sheet}
<link rel="stylesheet" href="./components/menu-site/style-menu.css" />
 <nav class="toolbar nav-link">
      <p class="logo set-font">BURGER HEAVEN</p>
      <ul class="menu nav-link">
        <li><a href="#" class="items set-font">ABOUT</a></li>
        <li><a href="#" class="items set-font">MENU</a></li>
        <li><a href="#" class="order set-font">ORDER ONLINE</a></li>
      </ul>
    </nav>
    `;
    return template.content.cloneNode(true);
  }
}

export { MenuSite };
