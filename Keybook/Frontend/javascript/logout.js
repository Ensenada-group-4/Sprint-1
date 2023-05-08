function logout() {
    localStorage.removeItem('userId');
    alert('Ha cerrado sesión. Volviendo a página de inicio');
    window.location.href = "formLogin.html";
}
