//1

const notCar = document.querySelector('ul');
const removeItemFirst = notCar.querySelectorAll('li')[2];
const removeItemSecond = notCar.querySelectorAll('li')[4];
const removedItemFirst = notCar.removeChild(removeItemFirst);
const removedItemSecond = notCar.removeChild(removeItemSecond);

//2

const elementsLi = document.querySelectorAll('li');
for(let i of elementsLi) {
    i.classList.add('listItem')
};

const elementUl = document.querySelector('ul');
elementUl.classList.add('list');

 //3

const parent = document.querySelector('.list');
const liFirst = document.createElement('li');
liFirst.innerText = 'Bugatti';
const firstLi = document.querySelector('.listItem');
parent.insertBefore(liFirst, firstLi);
liFirst.classList.add('listItem')

//4

const parenT = document.querySelector('.list');
const liLast = document.createElement('li');
liLast.innerText = 'Ford';
parenT.appendChild(liLast);
liLast.classList.add('listItem')


//5

const form = document.querySelector('form');

const firstName = document.createElement('input');
firstName.setAttribute('type', 'text');
firstName.placeholder = 'First Name';
form.appendChild(firstName);

const secondName = document.createElement('input');
secondName.setAttribute('type', 'text');
secondName.placeholder = 'Surname';
form.appendChild(secondName);

const password = document.createElement('input');
password.setAttribute('type', 'password');
password.placeholder = 'Password';
form.appendChild(password);

const passwordConfirm = document.createElement('input');
passwordConfirm.setAttribute('type', 'password');
passwordConfirm.placeholder = 'Confirmation';
form.appendChild(passwordConfirm);

//6

const image = document.createElement('img');
image.src = 'images/icons8-heart.png';
document.querySelector('form').prepend(image);

//7

const p = document.querySelector('p');
p.classList.remove('red', 'italic');

//8

const h1 = document.createElement('h1');
h1.innerText = 'This is h1 tag.';
document.querySelector('#h1Wrapper').appendChild(h1);
h1.style.color = 'blue';
h1.style.fontSize = '40px';