const form = document.querySelector("#write-new-post");
const postListElement = document.querySelector("#post-list");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const post_id_user = localStorage.getItem('userId');
    const post_content = document.querySelector("#new-post-content").value;

    const data = {
        post_id_user,
        post_content,
    };

    await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json()
        )
        .then(data => {
            console.log(data);
            alert('Post enviado correctamente');
            // post_content = "";
        })
        .catch(error => {
            console.error(error);
        });
});