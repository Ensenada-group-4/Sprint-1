const createPostFormElement = document.querySelector("#write-new-post");
const postListElement = document.querySelector("#post-list");

createPostFormElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    const textAreaElement = document.querySelector("#new-post-content");

    let post = {
        author: "Alicia Gimenez",
        message: textAreaElement.value,
        image: "dummy" // Este elemento "image" es un dummy necesario para que la API acepte la publicación
    };

    console.log(post.message)

    const response = await fetch("https://kc-fake-tweets-api.onrender.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const createdPost = await response.json()

    textAreaElement.value = "";

    drawPost(createdPost)
});

function drawPost(post) {
  // creamos etiqueta article
  const postElement = document.createElement("article");
  postElement.setAttribute("id", post.id);
  let postContent = `
    <div class="default-card">
    <div class="post-author">
        <img
          src="img/avatares/jorge.png"
          alt="avatar"
          class="avatar"
      />
      <h4>${post.author}</h4>
    </div>
    <p>
    ${post.message}
    </p>
    <button class="reply btn btn-warning">Responder</button>
    <button class="buttonLike">Me gusta</button>
    <span class="count">${post.likes.length} Me gusta</span><p></p>
    <div class="reply" style="display: none">
      <textarea rows="2" cols="70"></textarea>
      <button class="send-reply btn btn-warning">
        Enviar respuesta
      </button>
      <button class="close-reply btn btn-warning" id="close-button">
        Cerrar
      </button>
    </div>
  </div>
`;
  postElement.innerHTML = postContent;
  // añadimos el post a la lista por el principio
  postListElement.appendChild(postElement)
  postListElement.prepend(postElement)
  const likeButton = postElement.querySelector(".buttonLike");
  const likeCount = postElement.querySelector(".count");
  let likeCountNumber = parseInt(likeCount.textContent);
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
}

async function drawPosts() {
    const response = await fetch("https://kc-fake-tweets-api.onrender.com/posts");
    const posts = await response.json();
    postListElement.innerHTML = "";

    posts.forEach((post) => {
        drawPost(post)
    });
}

drawPosts()