import loadMenu from './menu.js'
import loadContact from './contact.js'
import restaurantImg from './assets/components/pic/restaurant.jpg'

console.log('餐馆页面...');

function loadHomePage() {
  const nav = document.querySelector('nav');
  const homeBtn = document.createElement('button');
  homeBtn.textContent = '主页';
  nav.appendChild(homeBtn);
  const menuBtn = document.createElement('button');
  menuBtn.textContent = '菜单';
  nav.appendChild(menuBtn);
  const contactBtn = document.createElement('button');
  contactBtn.textContent = '联系我们';
  nav.appendChild(contactBtn);
  const content = document.querySelector('#content');
  const div = createHomePage();
  content.appendChild(div);
}

function createHomePage() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = '实惠餐厅';
  div.appendChild(h1);
  const img = document.createElement('img');
  img.src = restaurantImg;
  img.alt = '餐厅图片';
  div.appendChild(img);
  const p = document.createElement('p');
  p.textContent = '物美价廉，干净卫生，出餐速度快，即使用餐高峰期也享有便捷舒适的服务，还等什么，赶快进店品尝吧';
  div.appendChild(p);
  return div;
}

loadHomePage();
// loadMenu();
// loadContact();
