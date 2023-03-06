const formContainer = document.querySelector('#userForm');

createForm();

function createForm () {
    const form = document.createElement('form');
    formContainer.appendChild(form);

    const usernameInput = document.createElement('input');
    usernameInput.placeholder = "Namn"
    form.appendChild(usernameInput);

    const emailInput = document. createElement('input');
    emailInput.placeholder = "Email"
    form.appendChild(emailInput);

    const addEmailBtn = document.createElement('button');
    addEmailBtn.innerHTML = "Lägg till"
    form.appendChild(addEmailBtn);
}