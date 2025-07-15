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
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=shopping_cart"
/>
<nav class="toolbar nav-link">
  <div class="shopping-cart">
    <span class="material-symbols-outlined"> shopping_cart </span>
    <span id="counter">0</span>
  </div>
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
