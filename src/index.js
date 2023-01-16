import './style.css';
console.log('it works');

// onload
const loadFunction = function () {
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

  const initialContentContainer = document.querySelector('#content');
  initialContentContainer.append(
    websiteHeader,
    sectionsTabContainer,
    pageContentContainer
  );
};

loadFunction();
