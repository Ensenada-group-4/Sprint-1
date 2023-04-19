const contactForm = document.getElementById('login-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = event.target.elements['username'].value.trim();
    const pass = event.target.elements['password'].value.trim();
    if (user == "Alicia" && pass == "1234")
    {
        window.location.href = "./home.html";
    }
    else {
        alert("Usuario y/o contraseña incorrectas");
    }
    }
);


