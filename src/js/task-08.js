const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleLoginFormSubmit);

let outputLoginForm = {};

function handleLoginFormSubmit(e) {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        outputLoginForm.email = email.value;
        outputLoginForm.password = password.value;
        console.log(outputLoginForm);
        e.currentTarget.reset();
    }
};
