async function getUsers(done) {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    const randomUsers = data.sort(() => Math.random() - 0.5).slice(0, 8);
    console.log(randomUsers);
    randomUsers.forEach(user => {
        const follow = document.createRange().createContextualFragment(`
        <div class="col-sm-3 default-card friend-box">
            <img class="friend-avatar" style="border-radius: 50%; width: 150px; height: 150px;" src=${user.profile_picture} ></img>
            <a>${user.name}</a>
            <p>${user.email}</p>
            <a href="friendsProfile.html" id='profileLink'>Ver perfil</a>
            <button class="btn btn-outline-warning btn-sm">Enviar solicitud</button>
        </div>`);
        console.log(user.profile_picture)
        // listener de evento para el clic en el elemento a
        follow.querySelector('#profileLink').addEventListener('click', () => {
            localStorage.setItem('friendId', user.id);
            // window.location.href = 'friendsProfile.html';
        });
        const main = document.querySelector("article");
        main.append(follow);
    });
    done();
}

getUsers(() => {
    console.log('Datos de usuario cargados');
});
