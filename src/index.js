import './style.css';

import { createAboutPage } from './about';
import { createMenuPage } from './menu';
import { createContactPage, checkValidation } from './contact';

// loading functions
const onloadFunction = function () {
  const websiteHeader = document.createElement('div');
  websiteHeader.classList.add('website-header');
  websiteHeader.textContent = 'The BunZi';
  const sectionsTabContainer = document.createElement('div');
  sectionsTabContainer.classList.add('sections-tab-container');
  const aboutTab = document.createElement('div');
  aboutTab.classList.add('about-tab', '|', 'tab-menu-item');
  aboutTab.textContent = 'About';
  const menuTab = document.createElement('div');
  menuTab.classList.add('menu-tab', '|', 'tab-menu-item');
  menuTab.textContent = 'Menu';
  const contactTab = document.createElement('div');
  contactTab.classList.add('contact-tab', '|', 'tab-menu-item');
  contactTab.textContent = 'Contact';
  sectionsTabContainer.append(aboutTab, menuTab, contactTab);

  const pageContentContainer = document.createElement('div');
  pageContentContainer.classList.add('page-content');

  const footer = document.createElement('footer');
  const websiteBy = document.createElement('div');
  websiteBy.classList.add('website-by');
  websiteBy.innerHTML =
    'Website made by <a href="">I-zme</a> for <a href="">TOP</a>';
  const credits = document.createElement('ul');
  const creditsHeader = document.createElement('h3');
  creditsHeader.classList.add('credits-header');
  creditsHeader.textContent = 'Credits';
  credits.append(creditsHeader);

  const creditList = [
    'Video by <a href="https://pixabay.com/users/piyapong89-7158719/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=69066">Piyapong Saydaung</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=69066">Pixabay</a>',
    'By Darrylsnow - Own work, CC BY-SA 4.0,  from <a href="https://commons.wikimedia.org/w/index.php?curid=113075352">wikipedia</a>',
    'By Gisling - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=24704594',
    'By Bioniclepluslotr - I took a picture of food i cooked., CC BY-SA 3.0, from <a href="https://commons.wikimedia.org/w/index.php?curid=19181982">wikipedia</a>',
    'By Stewart from Taipei - Flickr, CC BY 2.0, from <a href="https://commons.wikimedia.org/w/index.php?curid=2447737">wikipedia</a>',
    'By mooogmonster from unknown - Flickr, CC BY 2.0, from <a href="https://commons.wikimedia.org/w/index.php?curid=955241">wikipedia</a>',
    'Photo by <a href="https://unsplash.com/@thommilkovic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thom Milkovic</a> on <a href="https://unsplash.com/photos/DdyCmQVmfI0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  ];

  creditList.forEach((item) => {
    let newListItem = document.createElement('li');
    newListItem.classList.add('credit-item');
    newListItem.innerHTML = item;
    credits.append(newListItem);
  });

  footer.append(websiteBy, credits);

  const initialContentContainer = document.querySelector('#content');
  initialContentContainer.append(
    websiteHeader,
    sectionsTabContainer,
    pageContentContainer,
    footer
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
loadContentPage('contact', createContactPage);

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

window.addEventListener('load', () => {
  const pageContentContainer = document.querySelector('.page-content');
  if (pageContentContainer.getAttribute('id') === 'contact') {
    checkValidation();
  }
});
