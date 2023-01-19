import AboutImg from './about.jpg';

const createMenuPage = function () {
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

function createMenuItem(title, imgName, imgAlt, description, price) {
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
}

export { createMenuPage };
