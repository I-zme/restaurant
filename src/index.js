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
};

const createAboutPage = function () {
  const pageContentContainer = document.querySelector('.page-content');

  pageContentContainer.setAttribute('id', 'about');
  const AboutHeader = document.createElement('h2');
  AboutHeader.classList.add('small-header');
  AboutHeader.textContent = 'About';

  const aboutText = document.createElement('div');
  aboutText.classList.add('about-text');

  [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci magna, sagittis id euismod et, aliquam a ipsum. Integer ac nisi sed mauris dictum consectetur a sit amet odio. Pellentesque auctor ornare tortor non fringilla.',
    'Aliquam posuere diam ut urna malesuada egestas. ',
    'In at congue lorem. Sed enim nibh, ornare vel venenatis ut, varius eget sapien. Duis consequat mattis dolor vitae maximus. Aliquam quis purus viverra, commodo nibh non, laoreet urna. Quisque vehicula eu justo ut mattis. Proin vel lorem non orci vestibulum ornare. Donec maximus egestas porta. Nunc laoreet consequat purus, eget rutrum metus mattis id. Integer vel pretium dolor. Aliquam id consequat neque.',
  ].forEach((para) => {
    let aboutPara = document.createElement('p');
    aboutPara.textContent = para;
    aboutText.append(aboutPara);
  });

  const aboutImage = document.createElement('img');
  aboutImage.classList.add('about-image');

  pageContentContainer.append(AboutHeader, aboutText, aboutImage);
};

// employ functions
loadFunction();
createAboutPage();
