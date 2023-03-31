## Sprint-1

## Tareas para la segunda entrega relacionadas con DOM y APIs:

- Formulario de recuperación de contraseña funcional con correo ficticio lulu@lala.com, al ingresar correctamente
el email larga alerta "el Correo enviado, reinicio de contraseña exitoso", en caso de ingresar mal el email
alerta indicando "Verifique si escribio correctamente su email".

- Se vinculo pagina de login con un usuario con claves (usuario: Alicia contraseña:1234), que redirecciona
a la pagina de inicio de Alicia, en caso de usuario erroneo alerta "Usuario y/o contraseña incorrectas".

- En la vista de perfiPropio, en la esquina inferior izquierda está el botón de "Eliminar cuenta". Para simular esta acción, borramos los contenidos de cada tarjeta del perfil, y tras 5 segundos nos redirecciona al formulario de login



## Utilizando la API  https://kc-fake-tweets-api.onrender.com/posts
## FETCH y POST
Con FETCH traemos posts de usuarios, con sus propios likes

Al escribir una nueva publicación, la enviamos con POST a la API y la recibimos en nuestro muro, ordenadas de más nuevas a más antiguas


Cada publicación que se imprime en nuestro muro incluye el nombre del autor y contenido del post, así como:

- Boton de "me gusta" funcional, que permite agregar un solo like,y en caso de clickar nuevamente lo quita, viendose reflejado en el contador de likes.

- Avatar de usuario que por ahora es siempre el mismo (para mantener formato), más adelante se cambiará para que vaya ligada a un ID de usuario


## Tareas realizadas desde la primera entrega

- Limpieza y refactorización del archivo CSS.

- Arreglos a la barra de navegación: agregado de menú hamburguesa y  logo

- Agregado de Logo y eslogan en pagina de Login.

- Colocación de footer en todas las paginas.

- Diversos arreglos que fuimos encontrando y adapatar estilos a las nuevas incorporaciones


## Tareas pendientes para ir mejorando el proyecto

- Seguir añadiendo funcionaliades
- Introducir más elementos ligados a la API
- Botón y formulario para responder al post de la API. Por ahora sólo disponible como demo en los posts default del HTML
- Reajustar ciertos elementos de diseño
