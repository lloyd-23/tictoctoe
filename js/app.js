const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

let errorCount = 0

form.addEventListener('submit', function onSubmit(e) {
    if (name.value === "lloyd" && password.value === "1234") {
        alert("Access granted")
    }
    else if (errorCount === 3) {
        errorElement.innerText = "Blocked!!!"
    }
    else 
    {
        if (name.value !== "lloyd") {
            alert ("incorrect name")
        } else {
            errorElement.innerText = "incorrect password"
        }

        errorCount++
    

    e.preventDefault()
})