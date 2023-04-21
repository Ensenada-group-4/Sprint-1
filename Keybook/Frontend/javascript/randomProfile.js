const randomUser = 1;
const url = 'https://randomuser.me/api/?results=' + randomUser;

for (let i = 0; i < randomUser; i++) {
    getUsuariosRandom();
}

async function getUsuariosRandom() {
    const response = await fetch(url);
    const data = await response.json();
    try {
        const user = data.results[0]
        const name = user.name.first + ' ' + user.name.last
        const photo = user.picture.large
        const email = user.email
        const cell = user.cell
        const birth = user.dob.age
        const city = user.location.city
        const country = user.location.country

        const nameField = document.getElementById('profile-fullName');
        nameField.textContent = name

        const birthField = document.getElementById('profile-birthDate');
        birthField.textContent = birth

        const cityField = document.getElementById('profile-city');
        cityField.textContent = city

        const countryField = document.getElementById('profile-country');
        countryField.textContent = country

        const emailField = document.getElementById('profile-email');
        emailField.textContent = email

        const cellField = document.getElementById('profile-phone');
        cellField.textContent = cell

        const photoField = document.getElementById('profile-avatar');
        const img = document.createElement('img');
        img.src = photo;
        img.alt = name;
        img.style.width = "120%";
        img.style.borderRadius = '50%';

        
        photoField.appendChild(img)
    }
    catch (error) {
        console.log('Ocurrió un error al solicitar los datos', error)
    }
}