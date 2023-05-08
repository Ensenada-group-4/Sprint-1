//BORRAR CUENTA
const eliminarCuenta = document.querySelector('#eliminar-cuenta');
const container = document.querySelector("#cuenta");
const cards = container.querySelectorAll(".profile-data");

eliminarCuenta.addEventListener('click', async (event) => {
    event.preventDefault();

    const id = localStorage.getItem('userId');

    if (confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
        const response = await fetch(`http://localhost:3000/users/${id}/delete`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },            
        }
        )
            .then(() => {
                localStorage.removeItem('userId')
                cards.forEach(card => {
                    card.innerHTML = ""
                })
                alert("Cuenta borrada. Te echaremos de menos 😔")
                setTimeout(() => {
                    window.location.href = "formLogin.html"
                }, 3000)
            })
            .catch(console.error())
    }
})