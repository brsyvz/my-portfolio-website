import "./project.css";
import {
  todoImg,
  libImg,
  resImg,
  etchImg,
  rpsImg,
} from "./img/index";

export default function renderProjectSection() {
  const section = document.createElement("section");
  const projectSectionWrapper = document.createElement("div");
  projectSectionWrapper.className = "projectSectionWrapper";
  const projectSection = document.createElement("div");
  projectSection.className = "projectSection";
  const body = document.querySelector("body");
  projectSectionWrapper.appendChild(projectSection);
  section.appendChild(projectSectionWrapper);
  body.appendChild(section);

  class ProjectTemplate {
    render(title, info, imgSource, order, live, source) {
      const projectContainer = document.createElement("div");
      projectContainer.className = "projectContainer";
      projectContainer.append(
        this.imageDiv(imgSource),
        this.textDiv(title, info, order, live, source)
      );
      projectSection.appendChild(projectContainer);
    }

    imageDiv(imgSource) {
      const myImage = new Image();
      myImage.src = imgSource;
      const imgDiv = document.createElement("div");
      imgDiv.className = "projectImgDiv";
      imgDiv.appendChild(myImage);
      return imgDiv;
    }

    textDiv(title, info, order, live, source) {
      const textDiv = document.createElement("div");
      textDiv.className = "projectTextDiv";
      textDiv.classList.add(order);
      const h4 = document.createElement("h4");
      h4.textContent = title;
      const p = document.createElement("p");
      p.textContent = info;
      textDiv.append(h4, p, this.linkDiv(live, source));
      return textDiv;
    }

    linkDiv(liveLink, sourceLink) {
      const linkDiv = document.createElement("div");
      linkDiv.className = "p-linkContainer";
      const live = document.createElement("a");
      live.textContent = "Live";
      live.href = liveLink;
      live.target = "_blank";
      const source = document.createElement("a");
      source.textContent = "Source";
      source.href = sourceLink;
      source.target = "_blank";
      linkDiv.append(live, source);
      return linkDiv;
    }
  }

  function renderProjects() {
    const projects = {
      todoApp: {
        title: "To-do list app",
        info: "To-do list application to organize and keep track of your tasks.",
        imgSource: todoImg,
        order: "textDivLeft",
        live: "https://brsyvz.github.io/todo-list-app/",
        source: "https://github.com/brsyvz/todo-list-app",
      },
      libraryApp: {
        title: "Library app",
        info: "A library application to add, display, and store books.",
        imgSource: libImg,
        order: "textDivRight",
        live: "https://brsyvz.github.io/book-library-app/",
        source: "https://github.com/brsyvz/book-library-app",
      },
      restaurantPage: {
        title: "Restaurant page",
        info: "A seafood restaurant website. Includes reservation form,  menu page, and contact page.",
        imgSource: resImg,
        order: "textDivLeft",
        live: "https://brsyvz.github.io/restaurant-page/",
        source: "https://github.com/brsyvz/restaurant-page",
      },
      Etch_a_sketch: {
        title: "Etch a sketch",
        info: 'Implementation of mechanical drawing toy called "Etch-A-Sketch".',
        imgSource: etchImg,
        order: "textDivRight",
        live: "https://brsyvz.github.io/etch-a-sketch/",
        source: "https://github.com/brsyvz/etch-a-sketch",
      },
      rpsGame: {
        title: "Rock paper scissors",
        info: 'Implementation of classic "rock paper scissors" game which is played as player versus computer.',
        imgSource: rpsImg,
        order: "textDivLeft",
        live: "https://brsyvz.github.io/rock-paper-scissors-game/",
        source: "https://github.com/brsyvz/rock-paper-scissors-game",
      },
    };

    const createProject = new ProjectTemplate();
    const projectHolder = [];

    for (const key in projects) {
      projectHolder.push(projects[key]);
    }

    projectHolder.forEach((project) => {
      createProject.render(
        project.title,
        project.info,
        project.imgSource,
        project.order,
        project.live,
        project.source
      );
    });
  }

  function insertHeaders() {
    const sectionHeader = document.createElement("h2");
    sectionHeader.classList.add("header-Projects", "section-headers");
    sectionHeader.textContent = "Projects";
    sectionHeader.id = "projects";
    projectSectionWrapper.prepend(sectionHeader);
  }

  renderProjects();
  insertHeaders();
}
