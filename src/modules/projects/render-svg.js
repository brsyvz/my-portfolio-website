export default function renderSvg() {
  const template = `
  <svg id="project-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#e5e5e5" fill-opacity="1" d="M0,96L360,32L720,160L1080,96L1440,96L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg>
 `;
  const range = document.createRange();
  const documentFragment = range.createContextualFragment(template);
  document.body.appendChild(documentFragment);
}
