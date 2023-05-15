const form = document.getElementById('form-register')

const alphaRegex = /^[A-zÀ-ÿ ]+$/;
const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;



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

    // Form validations before sending request to server
    if (!alphaRegex.test(firstName)) {
        alert("Nombre sólo puede contener letras")
    }

    if (!alphaRegex.test(lastName)) {
        alert("Apellidos sólo pueden contener letras")
    }

    if (isNaN(dob) || dob.length != 4) {
        alert("Año de nacimiento debe ser una cifra de 4 letras")
    }

    if (!alphaRegex.test(city)) {
        alert("Ciudad sólo pueden contener letras")
    }

    if (!alphaRegex.test(country)) {
        alert("País sólo pueden contener letras")
    }

    if (isNaN(phone)) {
        alert("Teléfono sólo puede contener números")
    }

    if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener al menos 8 caracteres e incluir minúsculas, mayúsculas y números")
    }

    if (password !== repeatPassword) {
        alert("Las contraseñas deben coincidir")
    }

    //If all fields are valid, we send request to server
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
        console.log(result), alert("Usuario creado")
        window.location.replace("formLogin.html")
    }
})
