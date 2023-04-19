//para crear varios usuarios random a la vez
const randomUser = 8;
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
        const picture = user.picture.large
        const container = document.createElement('div');
        container.classList.add("col-sm-3", "default-card", "friend-box")
        const position = document.querySelector(".friends-row")
        position.appendChild(container)
        const img = document.createElement('img');
        img.src = picture;
        img.alt = name;
        img.classList.add('friend-avatar');
        img.style.borderRadius = '50%';
        container.appendChild(img);
        const nameElement = document.createElement('p');
        nameElement.textContent = name;
        container.appendChild(nameElement);
        const link = document.createElement('a');
        link.href = '@' + name.toLowerCase().replace(/\s/g, '');
        link.textContent = '@' + name.toLowerCase().replace(/\s/g, '');
        container.appendChild(link);
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-warning', 'btn-sm');
        button.textContent = 'Enviar solicitud';
        container.appendChild(button);

    }
    catch (error) {
        console.log('Ocurrió un error al solicitar los datos', error)
    }
}