const form = document.querySelector("#write-new-post");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const post_content = document.querySelector("#new-post-content").value;

    const data = {
        post_content,
    };

    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Post enviado correctamente');
        })
        .catch(error => {
            console.error(error);
        });
});