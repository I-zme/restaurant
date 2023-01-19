import AboutImg from './about.jpg';

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

export { createAboutPage };
