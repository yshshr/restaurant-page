class Employee {
  constructor(name, position, telphone, email) {
    this.name = name;
    this.position = position;
    this.telphone = telphone;
    this.email = email;
  }
}

const employees = [];
employees.push(new Employee('张女士', '客服', '820-8820', 'zhang@goodrestaurant.com'));
employees.push(new Employee('王先生', '招商经理', '0517-88654752', 'wang@goodrestaurant.com'));

export function loadContact() {
  const content = document.querySelector('#content');
  const div =createContact();
  content.appendChild(div);
}

function createContact() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = '联系我们';
  div.appendChild(h1);
  employees.forEach((employee)=> {
    const contactdiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = employee.name;
    contactdiv.appendChild(h2);
    const position = document.createElement('span');
    position.textContent = employee.position;
    contactdiv.appendChild(position);
    const tel = document.createElement('span');
    tel.textContent = employee.telphone;
    contactdiv.appendChild(tel);
    const email = document.createElement('span');
    email.textContent = employee.email;
    contactdiv.appendChild(email);
    div.appendChild(contactdiv);    
  });
  return div;
}