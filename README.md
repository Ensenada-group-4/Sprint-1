# Sprint-1: Keybook
## Pasos para arrancar el proyecto
Accedemos al directorio Backend

 ```
cd Keybook\Backend
```
Instalamos las dependencias:

```
npm i
```
Arrancamos el servidor con uno de estos dos comandos:
```
node index.js  
nodemon
```
### Base de datos
En phpMyAdmin, crear una base de datos llamada "keybook" e importar el archivo keybook.sql de este repositorio.

Dicho archivo se encuentra en el directorio original, junto a este archivo README.md

## Tareas realizadas para esta entrega
- Actualización completa de la arquitectura del proyecto: organizar archivos en carpetas por tipo, renombrar todos los archivos al inglés en formato camelCase y nombres más apropiados, así como actualizar rutas para garantizar el funcionamiento
- Mejora de la navbar e incorporación del símbolo infinito, que cambia la vista correspondiente a blanco y negro. Hemos añadido esta mejora de accesibilidad para mejorar la experiencia de usuarios en el espectro autista (changeStyles.js, animationToggler.js)
- Creación de servidor backend y comienzo de desarrollo de endpoints relevantes
- Creación y aplicación de la base de datos keybook.sql para poder utilizar nuestra propia API
-Actualización del grid de amigos y perfil de Alicia conectándolos con la base de datos, consiguiendo imprimir información en nuestras vistas (userGrid.html + dbUser.js) (profileDbAlicia.html + dbAlicia.js)
- Mantenemos el muro de publicaciones a través de la API https://kc-fake-tweets-api.onrender.com/posts para poder crear nuevos posts así como imprimir otras ya existentes (home.html + postFeed.js )

## Vistas de la red social

- Formularios de login, creación de usuario y recuperación de cuenta (no funcionales)
- Página de inicio con diversos campos como muro de publicaciones y sección de amigos
- Página de perfil propio de Alicia Gimenez, con opción de editar campos
- Página de perfil de otros usuarios


## Funcionalidades pendientes de agregar al proyecto

- Formulario de registro de nuevo usuario funcional con la base de datos 
- Formulario de login funcional con la base de datos
- Acceso al perfil propio del usuario "logueado"
- Muro con publicaciones de la base de datos
- Publicación de posts a través de la base de datos
- Barra de búsqueda funcional


