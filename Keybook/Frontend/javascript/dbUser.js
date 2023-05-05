async function getUsers(done) {
    fetch('http://localhost:3000/users')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(user => {
                const follow = document.createRange().createContextualFragment(`
                <div class="col-sm-3 default-card friend-box">
    <img class="friend-avatar" style="border-radius: 50%; width: 150px; height: 150px;" src=${user.profile_picture}></img>
            <a>${user.name}</a>
            <p>${user.email}</p>
        <button class="btn btn-outline-warning btn-sm">Enviar solicitud</button>
        </div>`);
                console.log(user.profile_picture)
                const main = document.querySelector("article");
                main.append(follow);
            });
            done();
        })
        .catch((err) => console.log(err));
}

getUsers(() => {
    console.log('Datos de usuario cargados');
});
