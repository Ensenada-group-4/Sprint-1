const contactForm = document.getElementById('login-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.elements['email'].value.trim();
    const email2 = event.target.elements['email2'].value.trim();
    if (email == "lulu@lala.com" && email2 == "lulu@lala.com")
    {
        alert("Correo enviado, reinicio de contraseña exitoso");
    }
    else {
        alert("Verifique si escribio correctamente su email");
    }
    }
);





