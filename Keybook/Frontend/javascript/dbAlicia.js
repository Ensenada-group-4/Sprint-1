async function getUsers(done) {
    fetch('http://localhost:3000/user/id_5')

        .then(response => response.json())
        .then(data => {
            // const nameField = document.getElementById('profile-fullName');
            // nameField.textContent = data.user.name

            // const birthField = document.getElementById('profile-birthDate');
            // birthField.textContent = data.date_of_birth

            // const cityField = document.getElementById('profile-city');
            // cityField.textContent = data.city

            // const countryField = document.getElementById('profile-country');
            // countryField.textContent = data.country

            // const emailField = document.getElementById('profile-email');
            // emailField.textContent = data.email
            console.log(response);
            done();
        })
        .catch((err) => console.log(err));
}

getUsers(() => {
    console.log('Datos de usuario cargados');
});