const contactForm = document.getElementById("login-form");
const emailDiv = document.getElementById("email");
const passwordDiv = document.getElementById("password");
const errorContainer = document.getElementById("error-container");
const jwt = require("jsonwebtoken");

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

  if (result.error) {
    alert("Usuario y/o contraseña incorrectos");
  } else {
    localStorage.setItem("userId", result.id);
    alert("Usuario logueado correctamente");
    window.location.href = "./home.html";
  }
});