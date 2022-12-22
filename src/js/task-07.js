const fontSizeController = document.querySelector('#font-size-control');
const changeTextByController = document.querySelector('#text');

fontSizeController.addEventListener('input', (e) => { 
    let value = e.target.value;
    changeTextByController.style.fontSize = value + "px";
});
