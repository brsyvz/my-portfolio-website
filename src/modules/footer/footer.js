import "./footer.css";

export default function renderFooter() {
  const template = `<footer class="footer">
  <p>Copyright © 2021 -</p>
  <a href="https://github.com/brsyvz" target="_blank"
    >Baris Yavuz <i class="fab fa-github-alt"></i
  ></a>
</footer>`;

  const range = document.createRange();
  const documentFragment = range.createContextualFragment(template);
  document.body.appendChild(documentFragment);
}
