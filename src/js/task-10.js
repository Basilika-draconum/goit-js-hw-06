const wrapperOfBoxes = document.querySelector('#boxes');
const buttonCreateBoxes = document.querySelector('[data-create]');
const buttonDestroyBoxes = document.querySelector('[data-destroy]');
const callNumber = document.querySelector('input[type="number"]');

buttonCreateBoxes.addEventListener('click', callNumberForCreateBoxes);
buttonDestroyBoxes.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function callNumberForCreateBoxes() {
  createBoxes(Number(callNumber.value));
  console.log(callNumber.value);
}
let counter = 0;
function incrementCounter() {
  counter++;
}
function resetCounter() {
  counter = 0;
}

function createBoxes(amount) {  
  let markupOfBoxes = '';
  let startPixels = 30;
  for (let i = 0; i < amount; i += 1){
    markupOfBoxes += `<div style="background-color:${getRandomHexColor()}; height:${startPixels + counter * 10}px;width:${startPixels + counter * 10}px;"></div>`
    incrementCounter();
  }

  return wrapperOfBoxes.innerHTML += markupOfBoxes;
  // const createDivBoxes = Array(amount).fill(`<div> </div>`);
  // wrapperOfBoxes.append(...createDivBoxes);
}

function destroyBoxes() {
  // for (const div of wrapperOfBoxes.children) {
  //   div.remove();}
  wrapperOfBoxes.innerHTML = '';
  resetCounter();
}
