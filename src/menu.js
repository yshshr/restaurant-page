class Menu{
  constructor(name, description, price, imageUrl){
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

const mainfood = [];
const dishes =[];
const soups = [];

mainfood.push(new Menu('米饭', '稻香贡米，臻选株高1米优质稻种，专注打造品质稻花香米', 3, ''));
mainfood.push(new Menu('馒头', '精选优质面粉，纯手工制作，营养健康，嚼劲十足', 2, ''));
mainfood.push(new Menu('面条', '劲道、爽滑、麦香味十足，空心挂面吸收更多汤汁，更加入味', 8, ''));

dishes.push(new Menu('拍黄瓜', '一道以黄瓜为主材的家常凉菜', 12, ''));
dishes.push(new Menu('宫保鸡丁', '口感酸甜，色泽鲜亮，鸡肉口感滑嫩', 24, ''));
dishes.push(new Menu('蒜蓉西兰花', '清脆爽口、蒜香浓郁的家常素菜', 15, ''));
dishes.push(new Menu('清蒸鲈鱼', '肉质细嫩爽滑、口味咸鲜清淡', 32, ''));
dishes.push(new Menu('糖醋排骨', '经典的家常菜，酸甜开胃、肉质酥嫩', 38, ''));

soups.push(new Menu('西红柿蛋汤', '简单营养又美味', 10, ''));
soups.push(new Menu('瓠子蛋汤', '清淡鲜美、营养丰富的家常汤品', 10, ''));
soups.push(new Menu('冬瓜排骨汤', '清甜鲜美、消暑去湿的经典家常汤品', 35, ''));



function createMenu() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = '菜单';
  div.appendChild(h1);
  const h2mainfood = document.createElement('h2');
  h2mainfood.textContent = '主食';
  div.appendChild(h2mainfood);
  mainfood.forEach((mfood) => {
    const menudiv = createMenuDiv(mfood);
    div.appendChild(menudiv);
  });

  const h2dishes = document.createElement('h2');
  h2dishes.textContent = '菜品';
  div.appendChild(h2dishes);
  dishes.forEach((dish) => {
    const menudiv = createMenuDiv(dish);
    div.appendChild(menudiv);
  });

  const h2soup = document.createElement('h2');
  h2soup.textContent = '汤';
  div.appendChild(h2soup);
  soups.forEach((soup) => {
    const menudiv = createMenuDiv(soup);
    div.appendChild(menudiv);
  });
  return div;

  function createMenuDiv(menu) {
    const menudiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = menu.name;
    menudiv.appendChild(h3);
    const p = document.createElement('p');
    p.textContent = menu.description;
    menudiv.appendChild(p);
    const span = document.createElement('span');
    span.textContent = `${menu.price}元`;
    menudiv.appendChild(span);
    const img = document.createElement('img');
    img.src = menu.imageUrl;
    img.alt = '菜品图片';
    menudiv.appendChild(img);
    return menudiv;
  }
}

export function loadMenu() {
  const menu = createMenu();
  const content = document.querySelector('#content');
  content.appendChild(menu);
}

