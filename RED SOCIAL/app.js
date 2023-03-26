/* poner mensaje en post */
/* el código espera a que se cargue el contenido de la página utilizando window.onload */
/*     selecciona todos los elementos con la clase "reply" y agrega un controlador de eventos para el evento de clic en cada uno de ellos. Cuando se hace clic en uno de estos botones, se selecciona el elemento hermano siguiente y se cambia su propiedad de visualización a “block” para mostrarlo */
window.onload = function () {
    const buttonsReply = document.querySelectorAll(".reply");
    buttonsReply.forEach((boton) => {
    boton.addEventListener("click", () => {
        const reply = boton.nextElementSibling;
        reply.style.display = "block";
    });
    });

/* selecciona todos los elementos con la clase "send-reply" y añade un controlador de eventos para el evento de clic. Al hacer clic en uno de estos botones, se selecciona el valor del elemento hermano anterior textarea, se crea un nuevo elemento p, se establece su contenido como el valor del textarea, y se agrega al final del elemento abuelo (que debería ser el contenedor del mensaje). Luego, borra el valor del textarea y oculta el elemento padre*/

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
var buttonLike = document.getElementById("buttonLike");
		var countLike = document.getElementById("countLike");

		var count = 0;
		buttonLike.addEventListener("click", 
        function() {
			count++;
			countLike.innerHTML = count + " Me gusta";
		});