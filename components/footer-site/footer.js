import { sheet } from "/js/global-style.js";
let $ = document;

let template = $.createElement("template");
template.innerHTML = `
${sheet}
<link rel="stylesheet" href="/components/footer-site/footer.css">
<footer>
      <div class="foot-box">
        <p class="title-foot">Burger Heaven</p>
        <p>Copyright Burger Heaven</p>
      </div>
      <div class="foot-box">
        <p class="title-foot">more</p>
        <ul>
          <li><a href="#">About</a></li>
        </ul>
        <ul>
          <li><a href="#">Menu</a></li>
        </ul>
        <ul>
          <li><a href="#">Location</a></li>
        </ul>
        <ul>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div id="box-time">
        <p class="title-foot">Hours</p>
        <p>Open from</p>
        <p>11AM to</p>
        <p>11PM daily</p>
      </div>
      <div class="foot-box">
        <div>
          <p class="title-foot">Join Our Newsletter</p>
          <button id="join-btn">SUBMIT</button>
        </div>
        <p id="pr-po">Privacy Policy</p>
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
