const inputEnterName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputEnterName.addEventListener("input", (eve) => {
    outputName.textContent = eve.currentTarget.value || "Anonymous";
});