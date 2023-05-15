const form = document.querySelector('.login-form')

form.addEventListener('submit', formSubmit);



function formSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {email, password};

    if (email === "" || password === "") {
        return alert('Всі поля повинні бути заповнені')
    }
    
    console.log(formData);

    form.reset();
};
