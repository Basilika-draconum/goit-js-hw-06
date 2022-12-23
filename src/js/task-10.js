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

function createBoxes(amount) {  
  let markupOfBoxes = '';
  for (let i = 0; i < amount; i += 1){
    markupOfBoxes += `<div style="background-color:${getRandomHexColor()}; height:${30+i*10}px;width:${30+i*10}px;"></div>`
  }
  return wrapperOfBoxes.innerHTML = markupOfBoxes;  
  // const createDivBoxes = Array(amount).fill(`<div> </div>`);
  // wrapperOfBoxes.append(...createDivBoxes);
}

function destroyBoxes() {
  // for (const div of wrapperOfBoxes.children) {
  //   div.remove();}
  wrapperOfBoxes.innerHTML = '';
}
