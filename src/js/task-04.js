let value = document.querySelector('#value');
let counterValue = 0;

const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonPlus.addEventListener('click', () => { counterValue += 1;value.textContent = counterValue;});
buttonMinus.addEventListener('click', () => { counterValue -= 1;value.textContent = counterValue;});