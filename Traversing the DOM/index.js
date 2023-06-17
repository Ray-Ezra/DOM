// DOM manipulation

// Transverse the DOM

// Parent Node transversal



// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// child Node transversal

 // console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';


// console.log(ul.children);
// console.log(ul.firstElementChildren);
// console.log(ul.lastElementchildren);

// sibling Node transversal

 let ul = document.querySelector('ul');

 const div = document.querySelector('div');
//  console.log(div.childNodes);

 console.log(ul.previousElementSibling);
 console.log(ul.nextElementSibling);