import './style.css';

import { createAboutPage } from './about';
import { createMenuPage } from './menu';
import { createContactPage } from './contact';
console.log('it works');

// onload
const onloadFunction = function () {
  const websiteHeader = document.createElement('div');
  websiteHeader.classList.add('website-header');
  websiteHeader.textContent = 'The BunZi';
  const sectionsTabContainer = document.createElement('div');
  sectionsTabContainer.classList.add('sections-tab-container');
  const aboutTab = document.createElement('div');
  aboutTab.classList.add('.about-tab', '|', 'tab-menu-item');
  aboutTab.textContent = 'About';
  const menuTab = document.createElement('div');
  menuTab.classList.add('.menu-tab', '|', 'tab-menu-item');
  menuTab.textContent = 'Menu';
  const contactTab = document.createElement('div');
  contactTab.classList.add('.contact-tab', '|', 'tab-menu-item');
  contactTab.textContent = 'Contact';
  sectionsTabContainer.append(aboutTab, menuTab, contactTab);

  const pageContentContainer = document.createElement('div');
  pageContentContainer.classList.add('page-content');

  //   const footer = document.createElement('footer');
  //   const credits = document.createElement('ul');
  //   [
  //     'Video by <a href="https://pixabay.com/users/piyapong89-7158719/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=69066">Piyapong Saydaung</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=69066">Pixabay</a>',
  //   ].forEach((item) => {
  //     let newListItem = document.createElement('li');
  //     newListItem.classList.add('credit-item');
  //     newListItem.innerHTML = item;
  //     credits.append(newListItem);
  //   });
  //   const websiteBy = document.createElement('div');
  //   websiteBy.classList.add('website-by');
  //   websiteBy.innerHTML =
  //     'Website made by <a href="">I-zme</a> for <a href="">TOP</a>';

  //   footer.append(websiteBy, credits);

  const initialContentContainer = document.querySelector('#content');
  initialContentContainer.append(
    websiteHeader,
    sectionsTabContainer,
    pageContentContainer
  );

  return pageContentContainer;
};

const loadContentPage = function (id, func) {
  const pageContentContainer = document.querySelector('.page-content');
  pageContentContainer.setAttribute('id', id);
  const newPageElementsDict = func();
  for (let elemName in newPageElementsDict) {
    pageContentContainer.append(newPageElementsDict[elemName]);
  }
};

const emptyContentPage = function () {
  const pageContentContainer = document.querySelector('.page-content');
  pageContentContainer.innerHTML = '';
};

// employ functions
onloadFunction();
// createAboutPage();
loadContentPage('contact', createContactPage);
