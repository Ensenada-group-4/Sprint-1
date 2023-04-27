
async function getUser(done) {
    const response = await fetch("http://localhost:3000/user/id_5");
    const data = await response.json()

    try {
        console.log(data[0].name)
        console.log(data.name)

        const nameField = document.getElementById('profile-fullName');
        nameField.innerHTML = data[0].name + ' ' + data[0].last_name;

        const birthField = document.getElementById('profile-birthDate');
        birthField.innerHTML = data[0].date_of_birth

        const cityField = document.getElementById('profile-location');
        cityField.textContent = data[0].city

        const countryField = document.getElementById('profile-loc-country');
        countryField.textContent = data[0].country

        const emailField = document.getElementById('profile-email');
        emailField.textContent = data[0].email

        const phoneField = document.getElementById('profile-phone');
        phoneField.textContent = data[0].phone

        console.log(response);
        done();
    }
    catch (error) {
        console.log('Ocurrio un error al solicitar los datos', error)
    }
}

getUser(() => {
    console.log('Datos de usuario cargados');
});