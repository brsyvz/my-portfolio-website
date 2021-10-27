import "./contact.css";
import { initializeApp } from "@firebase/app";
import { getDatabase, ref, push } from "@firebase/database";

export default function renderContactSection() {
  // contact form
  const template = `<section>
  <div class="contactSectionWrapper">
  <h2 id="contact" class="contactSectionHeader section-headers">Get In Touch</h2>
  <div class="contactContainer">
    <div class="form-container">
      <p class="formHeader">Send me a message</p>
      <form class="contact-form">
        <div class="form-setSpace">
          <label id="name-label" for="name">Name <span class="req" title="required">*</span></label>       
          <input type="text" id="name" name="name-label" placeholder="Enter your name" required />
        </div>
        <div class="form-setSpace">
          <label id="email-label" for="email">Email <span class="req" title="required">*</span></label>
          <input type="email" id="email" name="email-label" placeholder="Enter your e-mail" required />
        </div>
        <div class="form-setSpace">
          <p class="textAreaHeader">Your message <span class="req" title="required">*</span></p>
          <textarea id="message" class="textArea" rows="10" cols="30" placeholder=""></textarea>
        </div>
        <div class="form-setSpace">
        
        <input class="form-submitBtn" type="submit" value="Send" id="submit">
        </div>
        <p id="statusText">Your message succesfully send.</p>
      </form>
    </div>
  </div>
</div>
<section>
`;

  const range = document.createRange();
  const documentFragment = range.createContextualFragment(template);
  document.body.appendChild(documentFragment);

  // contact links
  function renderLinkSection() {
    const template = `<div  class="linkContainer">
    <ul class="contactLinks">
      <li>Email: <a target="_blank" href="mailto:brs2sty@gmail.com">brs2sty@gmail.com</a></li>
      <li>Tel: <a target="_blank" href="https://wa.me/905527109684">+90 552 710 96 84</a></li>
    </ul>
    <ul class="contactLinkIcons">
      <li><a target="_blank" href="https://www.linkedin.com/in/brsyvz/"><i class="fab fa-linkedin"></i>
      </li>
      <li><a target="_blank" href="https://github.com/brsyvz"><i class="fab fa-github"></i>
      </li>
      <li><a target="_blank" href="https://twitter.com/brs_yvz"><i class="fab fa-twitter"></i></>
      </li>
    </ul>
  </div>`;
    const range = document.createRange();
    const documentFragment = range.createContextualFragment(template);
    const contactContainer = document.querySelector(".contactContainer");
    contactContainer.appendChild(documentFragment);
  }

  renderLinkSection();
  sendFormData();
}

function sendFormData() {
  // removed for security before git repository push.
  const firebaseConfig = {  
    apiKey: "",
    authDomain: "",
    databaseURL:
      "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };

  initializeApp(firebaseConfig);

  function writeUserData(name, email, message) {
    const db = getDatabase();
    push(ref(db, "portfolio-messages"), {
      name: name,
      email: email,
      message: message,
    });
  }

  document
    .querySelector(".contact-form")
    .addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    document.querySelector("#statusText").style.display = "block";
    setTimeout(function () {
      document.querySelector("#statusText").style.display = "none";
    }, 3000);

    writeUserData(name.value, email.value, message.value);

    name.value = "";
    email.value = "";
    message.value = "";
  }
}
