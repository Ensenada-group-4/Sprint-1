// write post
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
            document.querySelector("#new-post-content").value = "";
            location.reload();
        })
        .catch(error => {
            console.error(error);
        });
});

// get post de la database
async function getPosts(done) {
    fetch('http://localhost:3000/posts')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(posts => {
                const postContent = document.createRange().createContextualFragment(
                    `<div class="default-card">
            <div class="post-author">     
                <img
                  src="${posts.profile_picture}"
                  alt="avatar"
                  style="border-radius: 50%; width: 100px; height: 100px;"
                  class="avatar"
              />
              <h4>${posts.name} </h4>
            </div>
            <p>
            ${posts.post_content}
            </p>    
            
            <button class="buttonLike fa-solid fa-heart btn btn-lg "></button>
            <span class="count"> Me gusta</span> `
                );

                //funcionalidad del botón "me gusta"
                const likeButton = postContent.querySelector(".buttonLike");
                const likeCount = postContent.querySelector(".count");

                let likeCountNumber = 0;

                let liked = false;

                likeButton.addEventListener("click", () => {
                    if (!liked) {
                        likeCountNumber++;
                        likeCount.textContent = `${likeCountNumber} Me gusta`;
                        liked = true;
                        likeButton.classList.add("clicked");
                    } else {
                        likeCountNumber--;
                        likeCount.textContent = `${likeCountNumber} Me gusta`;
                        liked = false;
                        likeButton.classList.remove("clicked");
                    }
                });

                console.log(posts.profile_picture)
                const main = document.querySelector("article");
                main.prepend(postContent)
            });
            done();
        })
        .catch((err) => console.log(err));
}
getPosts(() => {
    console.log('Datos de post cargados');
});