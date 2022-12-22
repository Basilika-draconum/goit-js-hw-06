function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomHexColor = document.querySelector('.color');
const buttonForChangeColor = document.querySelector('.change-color');

buttonForChangeColor.addEventListener('click', (e) => {
  let value = e.target.value;
  e.target.value = getRandomHexColor(); 
  randomHexColor.textContent = value;
  document.body.style.backgroundColor = value;
}); 