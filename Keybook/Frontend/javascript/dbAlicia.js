
async function getUsers(done) {
    fetch('http://localhost:3000/user/id_5')

        .then(response => response.json())
        .then(data => {
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
            console.log(response);
            done();
        })
        .catch((err) => console.log(err));
}

getUsers(() => {
    console.log('Datos de usuario cargados');
});