import "./skills.css";
import { cssImg, gitImg, ghubImg, jsImg, wpackImg, htmlImg } from "./img/index";


function textSection() {
  const template = `<section>
  <div id="skills" ; class="s-wrapper"> 
    <h2 class="s-header section-headers">Skills & Tools</h2>
    <div class="s-sectionWrapper hideOverflowOnMobile">
      <div class="s-textSection" data-aos="fade-right">
        <p>While developing website components, my current programming stack is vanilla <span class="spnClr">Javascript</span>, responsive <span class="spnClr">CSS</span>, and semantic <span class="spnClr">HTML</span>.
        </p>
        <p>
        When it comes to organizing my project's assets, I currently take advantage of a module bundler called <span class="spnClr">webpack</span>.
        </p>
        <p>
        While I'm working on a project, the <span class="spnClr">git</span> is an essential tool for me to keep track of changes in my projects. I store my projects on 
        <span class="spnClr">GitHub</span> and maintain them by using git command-line interface. 
        </p>
        <p> I continuously improve and learn new languages, tools, libraries, and frameworks to extend my current technology stack.</p>
        <p>
          As extra information, I use vs-code as my text editor, ubuntu
          terminal to execute npm, git, file managing commands, and software
          called "responsively" to analyze my website's responsive design in
          multiple device views.
        </p>
      </div>
    </div>
  </div>
</section>
<svg
  id="skills-svg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 130"
>
  <path
    fill="#F0EFEB"
    fill-opacity="1"
    d="M0,128L1440,0L1440,0L0,0Z"
  ></path>
</svg>
`;

  const range = document.createRange();
  const documentFragment = range.createContextualFragment(template);
  document.body.appendChild(documentFragment);
}

function logoSection() {
  const template = `
  <ul class="s-logoSection" data-aos="fade-left" >
    <div>
      <h3>Languages</h3>
      <li><img src="${jsImg}" alt="javascript-icon" />Javascript</li>
      <li><img src="${htmlImg}" alt="html-icon" />HTML</li>
      <li><img src="${cssImg}" alt="css-icon" />CSS</li>
    </div>
    <div>
      <h3>Tools</h3>
      <li><img src="${wpackImg}" alt="webpack-icon" />Webpack</li>
      <li><img src="${gitImg}" alt="git-icon" />Git</li>
      <li><img src="${ghubImg}" alt="github-icon" />Github</li>
    </div>
  </ul>`;

  const range = document.createRange();
  const documentFragment = range.createContextualFragment(template);
  const sectionWrapper = document.querySelector(".s-sectionWrapper");
  sectionWrapper.appendChild(documentFragment);
}

export default function renderSkillsSection() {
  textSection();
  logoSection();
}
