import tangbaoImg from './tangbao.jpg';
import xiaolongbaoImg from './Xiaolongbao.jpg';
import jiaoziImg from './BoiledDumplings.jpg';
import shumaiImg from './shumai.jpg';
import wontonImg from './wonton.jpg';

const createMenuPage = function () {
  const menuItems = [
    {
      title: 'Xiao Long Bao - 小笼包',
      imgName: xiaolongbaoImg,
      imgAlt: 'Steamed xiaolongbao in traditional bamboo steamer',
      description:
        'A small bun steamed in a bamboo steamer with various fillings, including soup-filled pork.',
      price: 6,
    },
    {
      title: 'Soup dumpling - 汤包',
      imgName: tangbaoImg,
      imgAlt: 'steamer with delicious soup filled dumplings',
      description:
        'Large soup-filled type of steamed buns. Place one on a spoon, take a small bite and see the soup pouring out, heavenly on cold days.',
      price: 10,
    },
    {
      title: 'Jiaozi - 饺子',
      imgName: jiaoziImg,
      imgAlt: 'plate of boiled dumplings',
      description:
        'Chinese filled dumplings come in many forms - steamed, boiled, pan-fried and deep-fried. Each type is delicious with its own unique taste, please try the different methods to enjoy the taste of comforting chinese dumplings.',
      price: 8,
    },
    {
      title: 'Shumai - 烧卖',
      imgName: shumaiImg,
      imgAlt: 'steamer with shrimp filled shumai dumplings',
      description:
        'A traditional Chinese dumpling, the dough skin is very thin and wrapped in pleats around delicious filling of shrimp, pork and vegetables.',
      price: 10,
    },
    {
      title: 'wonton - 馄饨',
      imgName: wontonImg,
      imgAlt: 'bowl of wonton soup with wonton dumplings and vegetables',
      description:
        'Wonton dumplings have thin skins and various fillings, boiled and served with wonton soup they are especially delicious, a taste of home.',
      price: 7,
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
