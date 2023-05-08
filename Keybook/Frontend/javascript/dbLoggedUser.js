
async function getUser(done) {
    const id = localStorage.getItem('userId');

    const response = await fetch(`http://localhost:3000/users/${id}`)
    // const response_studies = await fetch(`http://localhost:3000/studies/${id}`);
    const data = await response.json()
    console.log(id)
    // const data_studies = await response_studies.json()


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

        //Temporlamente deshabilitado
        // const studiesField = document.getElementById('formacion');
        // studiesField.textContent = data_studies.studies_course + '\n' + data_studies.studies_institution + '\n' + data_studies.studies_date + '\n' + data_studies.studies_level;

        //imagenes
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

getUser(() => {
    console.log('Datos de usuario cargados');
});