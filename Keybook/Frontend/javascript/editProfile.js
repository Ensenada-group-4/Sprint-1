const form = document.querySelector("#email-edit-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = localStorage.getItem('userId');
    const email = document.getElementById("new-email").value;

    const data = {
        email
    };

    const response = await fetch(`http://localhost:3000/users/${id}/email`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();
    if (result.error) {
        alert("Dirección de correo ya en uso. Pruebe otra vez");
    } else {
        alert('Email actualizado correctamente');
        location.reload();
    }
});

const form_phone = document.querySelector("#phone-edit-form");

form_phone.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = localStorage.getItem('userId');
    const phone = document.getElementById("new-phone").value;

    const data = {
        phone
    };
    console.log(data)
    console.log(phone)

    await fetch(`http://localhost:3000/users/${id}/phone`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {

            alert('Teféfono actualizado correctamente');
            // const emailField = document.getElementById('profile-email');
            // emailField.innerHTML = newEmail;
            location.reload();
        })
        .catch(error => {
            console.error(error);
        });
});