const form = document.querySelector("#email-edit");


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = localStorage.getItem('userId');
    const newEmail = document.querySelector("#new-email").value;

    const data = {
        id,
        newEmail,
    };

    await fetch("http://localhost:3000/users/email", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json()
        )
        .then(data => {
            console.log(data);
            alert('email actualizado correctamente');
            const emailField = document.getElementById('profile-email');
            emailField.innerHTML = newEmail;
            location.reload();
        })
        .catch(error => {
            console.error(error);
        });
});