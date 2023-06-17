// Event listeners

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn(){
//     alert('I also love javascript');
// };
// buttonTwo.addEventListener("click", alertBtn);

// mouseover

const newBackgroundColor = document.querySelector('.btn3');

function changeBgColor() {
    newBackgroundColor.style.BackgroundColor = 'blue';
};
newBackgroundColor.addEventListener("mouseover", changeBgColor);
