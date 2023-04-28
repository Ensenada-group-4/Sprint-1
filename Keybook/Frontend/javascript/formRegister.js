//en proyecto, no es funcional
const form = document.querySelector('form');
const formData = new FormData();

async function formRegister() {
    fetch('')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}