const form = document.querySelector(".login-form")
const labelEl = document.querySelectorAll("label")

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim()
    const password = e.target.elements.password.value.trim()
    if (email === "" || password === "") {
        alert('All form fields must be filled in')
    } 
    const data = {
        email: email,
        password: password,
    }
    console.log(data);
    e.target.reset()
    
})
