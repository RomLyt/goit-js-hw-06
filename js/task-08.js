const form = document.querySelector('.login-form')

form.addEventListener('submit', formSubmit);



function formSubmit(event) {
    event.preventDefault();

    checkForm();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {email, password};
    
    console.log(formData);

    form.reset();
};

function checkForm(action) {
    form.action = action
    if (form.cheackValidity()) {
        form.submit()
    } else {
        alert('Всі поля повинні бути заповнені')
    }
}