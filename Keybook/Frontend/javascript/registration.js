const form = document.getElementById('form-register')
form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repeatPassword = document.getElementById('repeat-password').value

    console.log(name, email, password, repeatPassword)

    if (password !== repeatPassword) {
        alert("Passwords must match")

    } else {

        await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            }),
        })
            .then(response => response.text())
            .then(result => console.log(result), alert("Usuario creado"),
                window.location.replace("formLogin.html"))
            .catch(error => console.log('error', error));
    }
})