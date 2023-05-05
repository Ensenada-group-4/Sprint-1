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
const contactForm = document.getElementById("login-form");
const userDiv = document.getElementById("email");
const passwordDiv = document.getElementById("password");
const errorContainer = document.getElementById("error-container");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!errorContainer.classList.contains("hidden")) {
    errorContainer.classList.add("hidden");
  }
  const user = userDiv.value;
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
