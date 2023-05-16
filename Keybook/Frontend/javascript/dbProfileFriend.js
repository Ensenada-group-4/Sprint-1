async function getFriend(done) {
    const id = localStorage.getItem('friendId');
    console.log(localStorage);
    console.log(id);
    if (!id) {
        console.log('No se ha encontrado un ID de amigo en localStorage');
        return;
    }
    const response = await fetch(`http://localhost:3000/users/${id}`)
    const data = await response.json()
    try {

        const nameField = document.getElementById('profile-fullName');
        nameField.innerHTML = data.name + ' ' + data.last_name;

        const birthField = document.getElementById('profile-birthDate');
        birthField.innerHTML = data.date_of_birth

        const cityField = document.getElementById('profile-location');
        cityField.textContent = data.city

        const countryField = document.getElementById('profile-loc-country');
        countryField.textContent = data.country

        const emailField = document.getElementById('profile-email');
        emailField.textContent = data.email

        const phoneField = document.getElementById('profile-phone');
        phoneField.textContent = data.phone

        const photoField = document.getElementById('profile-avatar');
        photoField.src = data.profile_picture;
        photoField.alt = data.name;
        photoField.style.borderRadius = '50%';
        photoField.classList("avatar-perfil");

        done();
    }
    catch (error) {
        console.log('Ocurrio un error al solicitar los datos', error)
    }
}

getFriend(() => {
    console.log('Datos de amigo cargados');
});
