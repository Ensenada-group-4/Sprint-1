//borrar cuenta
const eliminarCuenta = document.querySelector('#eliminar-cuenta');
const container = document.querySelector("#cuenta");
const cards = container.querySelectorAll(".profile-data");

eliminarCuenta.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
        cards.forEach(card => {
            card.innerHTML = "";            
            setTimeout(() => {
                window.location.href = "indexLogin.html"
            }, 5000)
        })
    }
})


//PARA USAR EN UN FUTURO CON APIS

// fetch('/eliminar-cuenta', {
// method: 'DELETE'
// })
// .then(() => {
// window.location.href = 'indexLogin.html'