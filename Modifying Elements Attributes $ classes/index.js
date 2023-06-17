// DOM manipulation

// const tittle = document.querySelector('#main-heading');

// tittle.style.color ='red';

// console.log(tittle)

// const listItems = document.querySelectorAll('.list-items');

// for ( i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '4rem';
// }

// creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');
// adding element
// ul.append(li)


li.innerText='X-men'


// li.setAttribute('id', 'main-heading')

li.classList.add ('list-itmes');

console.log(li.classList.contains('list-itmes'));


//Remove Elements