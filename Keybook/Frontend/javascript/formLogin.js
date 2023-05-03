/*const contactForm = document.getElementById('login-form');
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
*/
function validateLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == " " || password == " ") {
    alert("Por favor ingrese un email y/o contraseña validos");
  } else {
    fetch(`http://localhost:3000/formLogin?email=${email}&password=${password}`)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (json) {
            window.location.href = `feed-responsive.html?userId=${json.iser_id}`;
          });
        } else {
          alert("email y/o contraseña incorrectos");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
