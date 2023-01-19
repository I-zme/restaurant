import './style.css';
import AboutImg from './about.jpg';
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

const createAboutPage = function () {
  const aboutHeader = document.createElement('h2');
  aboutHeader.classList.add('small-header');
  aboutHeader.textContent = 'About';
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
  aboutImage.setAttribute('src', AboutImg);

  //   pageContentContainer.append(aboutHeader, aboutText, aboutImage);
  return { aboutHeader, aboutText, aboutImage };
};

const createMenuPage = function () {
  const createMenuItem = function (title, imgName, imgAlt, description, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item-container');

    const menuItemImg = document.createElement('img');
    menuItemImg.classList.add('menu-img');
    menuItemImg.setAttribute('src', imgName);
    menuItemImg.setAttribute('alt', imgAlt);

    const menuItemTitle = document.createElement('h4');
    menuItemTitle.classList.add('menu-title');
    menuItemTitle.textContent = title;

    const menuItemDesc = document.createElement('p');
    menuItemDesc.classList.add('menu-desc');
    menuItemDesc.textContent = description;

    const menuItemPrice = document.createElement('div');
    menuItemPrice.classList.add('menu-price');
    menuItemPrice.textContent = `${price}$`;

    menuItem.append(menuItemImg, menuItemTitle, menuItemDesc, menuItemPrice);
    return menuItem;
  };

  const menuItems = [
    {
      title: 'Baozi',
      imgName: AboutImg,
      imgAlt: 'a tasty baozi',
      description: 'Delicious meat filled bun',
      price: 8,
    },
    {
      title: 'Jiaozi',
      imgName: AboutImg,
      imgAlt: '',
      description: 'A heavenly meat filled smth',
      price: 1,
    },
  ];

  const menuItemsDict = [];
  menuItems.forEach((item) => {
    menuItemsDict.push(
      createMenuItem(
        item.title,
        item.imgName,
        item.imgAlt,
        item.description,
        item.price
      )
    );
  });
  return { ...menuItemsDict };
};

const createContactPage = function () {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const hours = document.createElement('div');
  hours.classList.add('hours-container');

  addSmallHeader(hours, 'hours-header', 'Hours');
  hoursTemplate('Mon-Fri', [10, 20]);
  hoursTemplate('Sat', [10, 22], 'Hours might differ');
  hoursTemplate('Sun', ['closed']);

  const address = document.createElement('div');
  address.classList.add('address-container');
  addSmallHeader(address, 'address-header', 'Address');
  const addressDetails = document.createElement('p');
  addressDetails.textContent = '7380 Pine Dr., Copperas Cove, TX 76522';
  address.append(addressDetails);

  const phoneNumber = document.createElement('div');
  const PHONENUMBER = '+1 202-918-2132';
  phoneNumber.classList.add('phone-number-container');
  addSmallHeader(phoneNumber, 'phone-number-header', 'Phone Number');
  const callphoneNumber = document.createElement('a');
  callphoneNumber.setAttribute('href', `tel: ${PHONENUMBER}`);
  callphoneNumber.textContent = PHONENUMBER;
  phoneNumber.append(callphoneNumber);

  infoContainer.append(hours, address, phoneNumber);

  const contactformContainer = document.createElement('div');
  contactformContainer.classList.add('send-message-container');
  const contactForm = document.createElement('form');
  contactForm.setAttribute('id', 'contact-form');
  addSmallHeader(contactformContainer, 'contact-form-header', 'Message us');

  //   'e.g. john.smith@gmail.com';
  const emailContainer = createInputBox(
    'email',
    'Email',
    'e.g. john.smith@gmail.com',
    'input',
    'email'
  );

  const textareaContainer = createInputBox(
    'user-message',
    'Message',
    '',
    'textarea'
  );

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('btn');
  submitButton.textContent = 'Submit';

  contactForm.append(emailContainer, textareaContainer, submitButton);
  contactformContainer.append(contactForm);

  return { infoContainer, contactformContainer };

  function addSmallHeader(parentElement, classname, title) {
    const header = document.createElement('h3');
    header.classList.add(classname, 'small-header');
    header.textContent = title;
    parentElement.append(header);
  }
  function hoursTemplate(days, [openingHour, closingHour], comment) {
    const hoursDiv = document.createElement('p');
    const hoursDays = document.createElement('span');
    hoursDays.classList.add('hours-days');
    hoursDays.textContent = `${days}: `;

    const hoursHours = document.createElement('span');
    hoursHours.classList.add('hours-hours');
    hoursHours.textContent =
      typeof openingHour === 'number'
        ? `${openingHour}:00 - ${closingHour}:00`
        : openingHour;

    hoursDiv.append(hoursDays, hoursHours);
    if (!!comment) {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('hours-comment');
      commentDiv.textContent = `(${comment})`;
      hoursDiv.append(commentDiv);
    }

    hours.append(hoursDiv);
  }
  function createInputBox(idName, labelName, placeholder, elementTag, type) {
    const container = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', idName);
    label.classList.add('form-label');
    label.textContent = labelName;

    const userInput = document.createElement(elementTag);
    userInput.setAttribute('type', type);
    userInput.setAttribute('name', idName);
    userInput.setAttribute('id', idName);
    userInput.setAttribute('class', 'form-input');
    userInput.setAttribute('placeholder', placeholder);

    const messageBox = document.createElement('p');
    messageBox.classList.add('message-box');
    messageBox.textContent = 'required';

    container.append(label, userInput, messageBox);
    return container;
  }
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
