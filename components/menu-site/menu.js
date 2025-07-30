import { sheet } from "/js/global-style.js";
let $ = document;
let isOrderPage = window.location.pathname.endsWith("order.html");

let template = $.createElement("template");
template.innerHTML = `
${sheet}
<link rel="stylesheet" href="./components/menu-site/style-menu.css" />
<link
rel="stylesheet"
href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
<nav class="toolbar nav-link">
<div class="shopping-cart">
<span class="material-symbols-outlined cart-icon"> shopping_cart </span>
<span id="counter">0</span>
</div>
<p class="logo set-font">BURGER HEAVEN</p>
<ul class="menu">
${isOrderPage ? "" : `<li><a href="#" class="items set-font">ABOUT</a></li>`}
${
  isOrderPage
    ? `<span class="material-symbols-outlined home-icon set-font">home</span>`
    : `<a href="#" class="order set-font">ORDER ONLINE</a>`
}
</ul>
</nav>
`;
// <li><a href="#" class="order set-font">ORDER ONLINE</a></li>

class MenuSite extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export { MenuSite };
