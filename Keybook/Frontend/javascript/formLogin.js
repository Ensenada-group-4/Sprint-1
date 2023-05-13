const contactForm = document.getElementById("login-form");
const emailDiv = document.getElementById("email");
const passwordDiv = document.getElementById("password");
const errorContainer = document.getElementById("error-container");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const user = {
    email: emailDiv.value,
    password: passwordDiv.value
  }

  const response = await fetch("http://localhost:3000/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const result = await response.json();

  if (result.token) {
    localStorage.setItem("userData", JSON.stringify("userId", result.id))
    localStorage.setItem("token", JSON.stringify("token", result.token))
    alert("Usuario logueado correctamente");
    window.location.href = "./home.html";
  } else {
    alert("Usuario y/o contraseña incorrectos");
  }

});