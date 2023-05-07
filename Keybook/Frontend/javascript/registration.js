const form = document.getElementById('form-register')
form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const dob = document.getElementById('dob').value
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repeatPassword = document.getElementById('repeat-password').value

    console.log(name, lastName, dob, city, country, phone, email, password, repeatPassword)

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
                "lastName": lastName,
                "dob": dob,
                "city": city,
                "country": country,
                "phone": phone,
                "email": email,
                "password": password
            }),
        })
            .then(response => response.text())
            .then(result => console.log(result), alert("Usuario creado"),
                window.location.replace("formLogin.html")
                )
            .catch(error => console.log('error', error));
    }
})