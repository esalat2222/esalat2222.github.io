import { sheet } from "/js/global-style.js";
let $ = document;

class ProductSite extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.createTemplate().content.cloneNode(true));
  }
  createTemplate() {
    const getSrcImage = this.getAttribute("src");
    let template = $.createElement("template");
    template.innerHTML = `
  ${sheet}
  <link rel="stylesheet" href="/components/product-site/style-product.css" />
  <div class="product">
  <img src="${getSrcImage}" alt="ham" />
  <div class="box1">
  <p id="title-product">SALT & VINEGAR FRENCH FRIES</p>
  <a href="#" id="order-product">ORDER ONLINE</a>
  </div>
  </div>
  `;
    return template;
  }
}

export { ProductSite };
