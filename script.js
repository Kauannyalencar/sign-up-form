const email = document.getElementById("email")
const senha = document.getElementById('password')
const comfirmSenha = document.getElementById('com-password')
const error = document.querySelector(".error")

function validarSenha() {
    if (comfirmSenha.value != senha.value) {
        comfirmSenha.setCustomValidity("Passwords don't match")
        comfirmSenha.reportValidity()

    } else {
        comfirmSenha.setCustomValidity('')
    }
}

email.addEventListener("input", (event) => {
    validarEmail(email.value)
})

function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email)
}