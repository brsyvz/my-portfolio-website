import "./header.css";
import headerLogo from "./header-logo.png";

export default function renderHeader() {
  const template = `<header class="header">
<img src="${headerLogo}" class="logo" alt="">
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a class="links" href="#about">About</a></li>
    <li><a class="links" href="#skills">Skills</a></li>
    <li><a class="links" href="#projects">Projects</a></li>
    <li><a class="links" href="#contact">Contact</a></li>
  </ul>
</header>`;
  const range = document.createRange();
  const documentFragment = range.createContextualFragment(template);
  document.body.appendChild(documentFragment);
}
