// const createPostFormElement = document.querySelector("#write-new-post");
// const postListElement = document.querySelector("#post-list");

// createPostFormElement.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const textAreaElement = document.querySelector("#new-post-content");

//   let post = {
//     author: "Alicia Gimenez",
//     message: textAreaElement.value,
//     image: "dummy" // Este elemento "image" es un dummy necesario para que la API acepte la publicación
//   };

//   console.log(post.message)

//   const response = await fetch("http://localhost:3000/posts", {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })

//   const createdPost = await response.json()

//   textAreaElement.value = "";

//   drawPost(createdPost)
// });

// function drawPost(post) {
//   // creamos etiqueta article
//   const postElement = document.createElement("article");

//   postElement.setAttribute("id", post.id);

// let postContent = `
//     <div class="default-card">
//     <div class="post-author">
//         <img
//           src="/Keybook/Frontend/img/avatares/jorge.png"
//           alt="avatar"
//           class="avatar"
//       />
//       <h4>${post.author}</h4>
//     </div>
//     <p>
//     ${post.message}
//     </p>
//     <button class="buttonLike fa-solid fa-heart btn btn-lg "></button>
//     <span class="count">${post.likes.length} Me gusta</span>
// `;

//   postElement.innerHTML = postContent;

// // añadimos el post a la lista por el principio
// postListElement.appendChild(postElement)
// postListElement.prepend(postElement)

// //funcionalidad del botón "me gusta"
// const likeButton = postElement.querySelector(".buttonLike");
// const likeCount = postElement.querySelector(".count");

// let likeCountNumber = parseInt(likeCount.textContent);

// let liked = false;

// likeButton.addEventListener("click", () => {
//   if (!liked) {
//     likeCountNumber++;
//     likeCount.textContent = `${likeCountNumber} Me gusta`;
//     liked = true;
//     likeButton.classList.add("clicked");
//   } else {
//     likeCountNumber--;
//     likeCount.textContent = `${likeCountNumber} Me gusta`;
//     liked = false;
//     likeButton.classList.remove("clicked");
//   }
// });

// }

// async function drawPosts() {
//   const response = await fetch("http://localhost:3000/posts");
//   const posts = await response.json();
//   postListElement.innerHTML = "";

//   posts.forEach((post) => {
//     drawPost(post)
//   });
// }

// drawPosts()


// async function getPosts(done) {
//   fetch('http://localhost:3000/posts')

//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       data.forEach(posts => {
//         const postContent = document.createRange().createContextualFragment(
//           `<div class="default-card">
//           <div class="post-author">
//               <img
//                 src="${posts.profile_picture}"
//                 alt="avatar"
//                 class="avatar"
//             />
//             <h4>${posts.name} </h4>
//           </div>
//           <p>
//           ${posts.post_content}
//           </p>
//           <button class="buttonLike fa-solid fa-heart btn btn-lg "></button>
//           <span class="count"> Me gusta</span> `
//         );

//         //funcionalidad del botón "me gusta"
//         const likeButton = postContent.querySelector(".buttonLike");
//         const likeCount = postContent.querySelector(".count");

//         let likeCountNumber = 0; // lo tiro desde cero si no me daba problema de que no es numerico aunque lo parseara :(

//         let liked = false;

//         likeButton.addEventListener("click", () => {
//           if (!liked) {
//             likeCountNumber++;
//             likeCount.textContent = `${likeCountNumber} Me gusta`;
//             liked = true;
//             likeButton.classList.add("clicked");
//           } else {
//             likeCountNumber--;
//             likeCount.textContent = `${likeCountNumber} Me gusta`;
//             liked = false;
//             likeButton.classList.remove("clicked");
//           }
//         });

//         console.log(posts.profile_picture)
//         const main = document.querySelector("article");
//         main.prepend(postContent)
//       });
//       done();
//     })
//     .catch((err) => console.log(err));
// }

// async function getPost(done) {
//   const response = await fetch("http://localhost:3000/posts");

//   const data = await response.json()


//   try {

//     const postName = document.getElementById('posts');
//     postName.innerHTML = data[0].post_content + ' ' + data[0].name;

//     const postContent = document.createElement('div');
//     postContent.className = 'default-card';
//     postContent.innerHTML = data[0].post_content;

//     const postAuthor = document.createElement('div');
//     postAuthor.className = 'post-author';
//     postAuthor.innerHTML = data[0].name;

//     postName.appendChild(postContent);
//     postContent.appendChild(postAuthor);

//     done();
//   }
//   catch (error) {
//     console.log('Ocurrio un error al solicitar los datos', error)
//   }
// }


// getPosts(() => {
//   console.log('Datos de post cargados');
// });