import "./about.css";
import profileImg from "./profile.png";
import resume from "./baris_yavuz_resume.pdf";

export default function renderAboutSection() {
  const template = `<section>
  <div class="aboutSectionWrapper">
    <h2 id="about" class="a-header section-headers">About Baris Yavuz</h2>
    <div class="aboutSectionContainer" >
      <div class="aboutImgDiv" data-aos="zoom-in">
        <img src="${profileImg}" />
      </div>
      <div class="aboutTextDiv">
        <p>
          Hi, I'm a front-end web developer living in Turkey. I create
          beautiful, easy-to-use, mobile-friendly websites.
        </p>
        <p>
          I pay attention to the details on both the user interface and
          logic parts. Furthermore, I focus on making the interface look
          professional, consistent and making the logic behind it clean,
          readable, easy to understand, and maintainable.
        </p>
        <p>
          I have a BS degree in Computer Engineering from
          <span class="spanLink"
            ><a target="_blank" href="https://www.vistula.edu.pl/en"
              >Vistula University</a
            >
            🇵🇱.</span
          >
        </p>
        <p>
          When I'm not coding, I like to do physical activities (mostly
          biking, fitness, or camping), trying new food recipes, and watch
          travel documentaries to explore different countries and cultures.
        </p>
        <div class="aboutLinkDiv" >
          <a target="_blank" href="${resume}">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </div>
</section>
<svg
  id="about-svg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 120"
>
  <path
    fill="#f6f6f8"
    fill-opacity="1"
    d="M0,0L480,128L960,32L1440,160L1440,0L960,0L480,0L0,0Z"
  ></path>
</svg>
  
  `;
  const range = document.createRange();
  const documentFragment = range.createContextualFragment(template);
  document.body.appendChild(documentFragment);
}
