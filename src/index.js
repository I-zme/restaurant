import './style.css';
import { onloadFunction } from './onload';
import { createAboutPage } from './about';
import { createMenuPage } from './menu';
import { createContactPage, checkValidation } from './contact';

// employ functions, on load it defaults to the about page
// FIXME: on reload the page goes back to about even if it was on something else before, the id is forgotten
const pageContentContainer = onloadFunction();
loadContentPage('about', createAboutPage);

const aboutTab = document.querySelector('.about-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');

aboutTab.addEventListener('click', () => {
  emptyContentPage();
  loadContentPage('about', createAboutPage);
});
menuTab.addEventListener('click', () => {
  emptyContentPage();
  loadContentPage('menu', createMenuPage);
});
contactTab.addEventListener('click', () => {
  emptyContentPage();
  loadContentPage('contact', createContactPage);
  checkValidation();
});

// loading functions
function loadContentPage(id, func) {
  pageContentContainer.setAttribute('id', id);
  const newPageElementsDict = func();
  for (let elemName in newPageElementsDict) {
    pageContentContainer.append(newPageElementsDict[elemName]);
  }
}

function emptyContentPage() {
  pageContentContainer.innerHTML = '';
}
