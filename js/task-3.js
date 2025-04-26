const inputEl = document.querySelector("#name-input")
const outputEl = document.querySelector('#name-output')
inputEl.addEventListener( 'input', handleUserInput)
function handleUserInput(e) {
    const userValue = e.target.value.trim() 
    if (userValue === "" || userValue === " ") {
        e.target.textContent = "Anonymous"
    } else {
        outputEl.textContent = userValue
    }
}