const formContainer = document.querySelector('#userForm');

createForm();

function createForm () {
    const form = document.createElement('form');
    formContainer.appendChild(form);

    const emailInput = document. createElement('input');
    emailInput.placeholder = "Email";
    emailInput.id = "email"
    form.appendChild(emailInput);

    const addEmailBtn = document.createElement('button');
    addEmailBtn.innerHTML = "Lägg till"
    addEmailBtn.type = "submit"
    form.appendChild(addEmailBtn);

    addEmailBtn.addEventListener('click', sendValue);
}

function sendValue(){
    console.log("hh")
    let emailInput = document.querySelector('#email')
    let email = emailInput.value;
    let userEmail = {email: email}

    fetch('http://localhost:3000/email', {
   method: "POST",
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify(userEmail)
}) 
}
