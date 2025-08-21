import { sheet } from "/js/global-style.js";
let $ = document;

let template = $.createElement("template");
template.innerHTML = `
${sheet}
<link rel="stylesheet" href="/components/footer-site/footer.css"> 
<footer>
      <div class="foot-box">
        <p class="title-foot">Burger Heaven</p>
        <p style="font-size:1vw;">Copyright Burger Heaven</p>
      </div>
      <div class="foot-box">
        <p class="title-foot">more</p>
        <ul>
          <li><a href="#" class="menu-list">About</a></li>
          <li><a href="#" class="menu-list">Location</a></li>
        </ul>
      </div>
      
      <div class="foot-box">
        <div>
          <p class="title-foot">Join Our Newsletter</p>
          <button id="join-btn">SUBMIT</button>
        </div>
      </div>
    </footer>
`;

class FooterSite extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
export { FooterSite };
