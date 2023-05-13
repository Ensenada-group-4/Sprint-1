const form = document.getElementById('form-register')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const firstName = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const dob = document.getElementById('dob').value
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repeatPassword = document.getElementById('repeat-password').value

    console.log(firstName, lastName, dob, city, country, phone, email, password, repeatPassword)

    if (password !== repeatPassword) {
        alert("Passwords must match")

    } else {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "name": firstName,
                "lastName": lastName,
                "dob": dob,
                "city": city,
                "country": country,
                "phone": phone,
                "email": email,
                "password": password
            }),
        })

        const result = await response.json();
        if (result.error) {
            alert("Dirección de correo ya en uso. Pruebe otra vez");
        } else {
            console.log(result), alert("Usuario creado"),
                window.location.replace("formLogin.html")
        }
    }
})
