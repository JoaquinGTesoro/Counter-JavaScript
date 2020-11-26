//Selectors
const DECREASE_BTN = document.querySelector('.decrease');
const RESET_BTN = document.querySelector('.reset');
const INCREASE_BTN = document.querySelector('.increase');
const NUMBER = document.getElementById('number');

//Event Listeners
DECREASE_BTN.addEventListener('click', decreaseNumber);
INCREASE_BTN.addEventListener('click', increaseNumber);
RESET_BTN.addEventListener('click', resetNumber)

//Functions
let number = 0;

function decreaseNumber() {
    number--;
    NUMBER.textContent = number;
    colorControl(number);
}

function increaseNumber() {
    number++;
    NUMBER.textContent = number;
    colorControl(number);
}
function resetNumber() {
    number = 0;
    NUMBER.textContent = number;
    colorControl(number);
}

function colorControl(number) {
    if (number == 0) {
        NUMBER.style.color = 'black';
    } else if (number > 0) {
        NUMBER.style.color = 'green';
    } else {
        NUMBER.style.color = 'red';
    }
}