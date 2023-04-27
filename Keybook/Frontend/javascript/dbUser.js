async function getUsers(done) {
    fetch('http://localhost:3000/user')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(user => {
                const follow = document.createRange().createContextualFragment(`
                <div class="col-sm-3 default-card friend-box">
    /* <img class="friend-avatar" src="../img/avatares/blankAvatar.png" ></img> */
    <img class="friend-avatar" src=${user.profile_picture}></img>
            <a>${user.name}</a>
            <p>${user.email}</p>
        <button class="btn btn-outline-warning btn-sm">Enviar solicitud</button>
        </div>`);
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
