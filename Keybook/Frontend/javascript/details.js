
//usuario loggeado, info del perfil
async function getUser(done) {
    const id = localStorage.getItem('userId');

    const response = await fetch(`http://localhost:3000/users/${id}`)
    const data = await response.json()
    console.log(id)

    try {

        const nameField = document.getElementById('profile-logged');
        nameField.innerHTML = data.name + ' ' + data.last_name;

        const photoField = document.getElementById('profile-logged-image');
        photoField.src = data.profile_picture;
        photoField.alt = data.name;
        photoField.style.borderRadius = '50%';
        photoField.style.width = '130px';
        photoField.style.height = '130px';
        photoField.classList("avatar-perfil");
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