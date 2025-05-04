
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = loginForm.elements;
    const submitForm = {};

    for (let element of elements) {
        if (element.type !== 'submit') {
            if (element.value.trim() === '') {
                alert('All form fields must be filled in');
                return;
            }
            submitForm[element.name] = element.value.trim();
        }
    }
    console.log(submitForm);
    loginForm.reset();
});
