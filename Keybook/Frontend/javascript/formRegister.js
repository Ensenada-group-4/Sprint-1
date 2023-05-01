//en proyecto, no es funcional
const form = document.querySelector("form-register");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    const data = {
        name,
        password
    };

    fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});