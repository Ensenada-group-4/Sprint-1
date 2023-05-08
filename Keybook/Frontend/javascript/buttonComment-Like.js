/* poner mensaje en post */
window.onload = function () {
  const buttonsReply = document.querySelectorAll(".reply");
  buttonsReply.forEach((boton) => {
    boton.addEventListener("click", () => {
      const reply = boton.nextElementSibling;
      reply.style.display = "block";
    });
  });

  const buttonsSendReply = document.querySelectorAll(".send-reply");
  buttonsSendReply.forEach((boton) => {
    boton.addEventListener("click", () => {
      const reply = boton.previousElementSibling.value;
      const newParagraph = document.createElement("p");
      newParagraph.textContent = reply;
      boton.parentElement.parentElement.appendChild(newParagraph);
      boton.previousElementSibling.value = "";
      boton.parentElement.style.display = "none";
    });
  });

  /* cierre */
  const botonCerrarRespuesta = document.getElementById("close-button");
  botonCerrarRespuesta.addEventListener("click", () => {
    console.log("Botón cerrar clickeado");
    botonCerrarRespuesta.parentElement.style.display = "none";
  });

};

//boton de me gusta
const likeButtons = document.querySelectorAll('.buttonLike');

likeButtons.forEach((button) => {
  let likeCount = 0;
  let likedMessages = [];

  button.addEventListener('click', () => {
    const message = button.closest('.message');

    new Promise((resolve, reject) => {
      if (!likedMessages.includes(message)) {
        likeCount++;
        button.classList.add('clicked');
        button.nextElementSibling.textContent = `${likeCount} Me gusta`;
        likedMessages.push(message);
        resolve({ id: message.id, count: likeCount });
      } else {
        likeCount--;
        button.classList.remove('clicked');
        button.nextElementSibling.textContent = `${likeCount} Me gusta`;
        likedMessages.splice(likedMessages.indexOf(message), 1);
        reject();
      }
    })
      .then((result) => {
        setTimeout(() => {
          console.log(`Mensaje con id ${result.id} tiene ${result.count} me gusta.`);
        }, 1000);
      })

  });
});