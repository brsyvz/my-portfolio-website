import "./styles/global.css";
import "./styles/aos.css";
import "@fortawesome/fontawesome-free/js/all";
import renderAboutSection from "./modules/about/about";
import renderHeader from "./modules/header/header";
import renderProjectSection from "./modules/projects/projects";
import renderContactSection from "./modules/contact/contact";
import renderFooter from "./modules/footer/footer";
import renderSkillsSection from "./modules/skills/skills";
import renderNavigateBtn from "./modules/navigateTop/navigateBtn";
import renderSvg from "./modules/projects/render-svg";
import Aos from "aos";

renderHeader();
renderAboutSection();
renderSkillsSection();
renderProjectSection();
renderSvg();
renderContactSection();
renderFooter();
renderNavigateBtn();

//  scroll animations
Aos.init();

// clear browser url on page refresh
function removeHash() {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}
removeHash();

// active link on page scroll
const activeLinks = () => {
  const links = document.querySelectorAll(".links");
  const sections = document.querySelectorAll("section");

  function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove("activeLink"));
    links[index].classList.add("activeLink");
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);
};

activeLinks();
