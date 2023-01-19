import instaImg from './instagram-icon.svg';
import fbImg from './facebook-icon.svg';
import twitImg from './twitter-icon.svg';

const createContactPage = function () {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const hours = document.createElement('div');
  hours.classList.add('hours-container');

  addSmallHeader(hours, 'hours-header', 'Hours');
  const hours1 = hoursTemplate('Mon-Fri', [10, 20]);
  const hours2 = hoursTemplate('Sat', [10, 22], 'Hours might differ');
  const hours3 = hoursTemplate('Sun', ['closed']);
  hours.append(hours1, hours2, hours3);

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

  const socialsContainer = document.createElement('div');
  socialsContainer.classList.add('socials-container');
  addSmallHeader(
    socialsContainer,
    'social-header',
    'Follow us on social media!'
  );

  const linkContainer = document.createElement('div');
  linkContainer.classList.add('link-container');
  const fbIcon = createSocialLink(
    'https://www.facebook.com',
    fbImg,
    'link to facebook'
  );
  const instaIcon = createSocialLink(
    'https://www.instagram.com/',
    instaImg,
    'link to instagram'
  );
  const twitterIcon = createSocialLink(
    'https://twitter.com/',
    twitImg,
    'link to twitter'
  );
  linkContainer.append(fbIcon, instaIcon, twitterIcon);
  socialsContainer.append(linkContainer);

  return { infoContainer, contactformContainer, socialsContainer };
};

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

  return hoursDiv;
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

function createSocialLink(socialLink, img, description) {
  const link = document.createElement('a');
  link.classList.add('social-link');
  link.setAttribute('href', socialLink);
  link.setAttribute('target', '_blank');
  const icon = document.createElement('img');
  icon.classList.add('social-icon');
  icon.setAttribute('src', img);
  icon.setAttribute('alt', description);
  link.append(icon);
  return link;
}

export { createContactPage };
