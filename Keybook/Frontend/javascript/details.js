
async function getUser(done) {
    const id = localStorage.getItem('userId');
    console.log(id)
    const response = await fetch(`http://localhost:3000/users/${id}`)
    // const response_studies = await fetch("http://localhost:3000/studies/studies_id_3");
    const data = await response.json()
    // const data_studies = await response_studies.json()

    try {

        const nameField = document.getElementById('profile-logged');
        nameField.innerHTML = data.name + ' ' + data.last_name;

        // const birthField = document.getElementById('profile-birthDate');
        // birthField.innerHTML = data[0].date_of_birth

        // const cityField = document.getElementById('profile-location');
        // cityField.textContent = data[0].city

        // const countryField = document.getElementById('profile-loc-country');
        // countryField.textContent = data[0].country

        // const emailField = document.getElementById('profile-email');
        // emailField.textContent = data[0].email

        // const phoneField = document.getElementById('profile-phone');
        // phoneField.textContent = data[0].phone

        // //parte de studies
        // const studiesField = document.getElementById('formacion');
        // studiesField.textContent = data_studies[0].studies_course + '\n' + data_studies[0].studies_institution + '\n' + data_studies[0].studies_date + '\n' + data_studies[0].studies_level;
        //imagenes
        const photoField = document.getElementById('profile-logged-image');
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