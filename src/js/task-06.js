const inputForValidation = document.querySelector('#validation-input');

inputForValidation.addEventListener("blur", () => {
    const dataLength = inputForValidation.getAttribute("data-length");
    const value = inputForValidation.value;
    inputForValidation.classList.remove("invalid", "valid");
    if (value.length < dataLength || value.length > dataLength) {inputForValidation.classList.add("invalid");
    } else {inputForValidation.classList.add("valid");
    }
});