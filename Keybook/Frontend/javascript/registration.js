const form = document.getElementById('form-register')
form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    console.log(name, lastName, email, password)

    await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "last_name": lastName,
            "email": email,
            "password": password
        }),
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    alert("Usuario creado")
    window.location.replace("formLogin.html")
})