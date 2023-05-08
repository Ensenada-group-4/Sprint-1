const contactForm = document.getElementById("login-form");
const userDiv = document.getElementById("email");
const passwordDiv = document.getElementById("password");
const errorContainer = document.getElementById("error-container");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!errorContainer.classList.contains("hidden")) {
    errorContainer.classList.add("hidden");
  }
  const user = { email: userDiv.value };
  const pass = passwordDiv.value;
  const response = await fetch("http://localhost:3000/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ user, password: pass }),
  });
  const result = await response.json();
  if (result.error) {
    errorContainer.textContent = result.error;
    errorContainer.classList.remove("hidden");
    alert("Usuario y/o contraseña incorrectos");
  } else {
    localStorage.setItem("userId", result.id);
    alert("Usuario logueado correctamente");
    window.location.href = "./home.html";
  }
});