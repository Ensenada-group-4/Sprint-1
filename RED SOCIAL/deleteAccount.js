//borrar cuenta
const eliminarCuenta = document.querySelector('#eliminar-cuenta');
eliminarCuenta.addEventListener('click', () => {
if (confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
fetch('/eliminar-cuenta', {
method: 'DELETE'
}).then(() => {
window.location.href = 'indexLogin.html';
});
}
});