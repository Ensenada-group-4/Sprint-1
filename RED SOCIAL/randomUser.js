const div = document.createElement('div');
document.body.appendChild(div);
const url = 'https://randomuser.me/api/';
function getUsuariosRandom() {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            const user = json.results[0]
            const name = user.name.first + ' ' + user.name.last
            const birthday = user.dob.date
            const address = user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.state + ', ' + user.location.country
            const picture = user.picture.large
            const container = document.querySelector('.friend-box');
            const img = document.createElement('img');
            img.src = picture;
            img.alt = name;
            img.classList.add('friend-avatar');
            img.style.borderRadius = '50%';
            container.appendChild(img);
            const nameElement = document.createElement('p');
            nameElement.textContent = name;
            container.appendChild(nameElement);
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-outline-warning', 'btn-sm');
            button.textContent = 'Añadir';
            container.appendChild(button);
            const link = document.createElement('a');
            link.href = '@' + name.toLowerCase().replace(/\s/g, '');
            link.textContent = '@' + name.toLowerCase().replace(/\s/g, '');
            container.appendChild(link);
        })
        .catch(error => {
            console.log('Ocurrió un error al solicitar los datos', error)
        })
}
getUsuariosRandom()