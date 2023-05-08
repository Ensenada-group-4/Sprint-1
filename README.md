# Sprint-1: Keybook - Reentrega 
## Pasos para arrancar el proyecto
Accedemos al directorio Backend

 ```
cd Keybook/Backend
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
- Formulario de registro de nuevo usuario funcional con la base de datos, con encriptación de contraseña 
- Formulario de login funcional con la base de datos
- Barra de búsqueda de usuarios funcional, filtrando por nombre o email de usuarios
- Muro con publicaciones de la base de datos
- Envío de publicaciones a la base de datos
- Acceso al perfil propio del usuario "logueado"
- Opción de editar los datos de contacto en la base de datos a través del perfil propio
- Opción de logout y de borrado de cuenta


## Mejoras a agregar en el futuro 

- Funcionalidad de relaciones y solicitudes de amistad
- Funcionalidad de ver el perfil de otros usuarios
- Gestión de errores
- Mejoras de seguridad a través de JWT
- Validaciones en formularios
- Reestructuración del backend


## Recomendación de navegación
1. Instalar las dependencias y conectar a la base de datos y al servidor
2. En la carpeta Frontend, abrir el archivo formLogin.html con Live Server
3. Acceder al formulario de registro a través del enlace "Registrate"
4. Rellenar todos los campos del formulario (required) y dar a enviar
5. De vuelta en el formulario de login, iniciar sesión con el usuario recién creado
6. En la página principal están disponibles las publicaciones de la base de datos. Enviar una nueva publicación.
7. Desde la página principal, al darle a "AMIGOS" redirige al grid de usuarios. Escribir nombre o email de un usuario existente y devolverá su tarjeta.
8. Desde aquí mismo, se puede acceder al perfil propio desde el icono de persona "Mi Perfil".
9. En perfil propio se ven los datos que se ingresaron en el formulario de creación de cuenta. Se puede modificar los datos de contacto email y teléfono.
10. Se puede cerrar sesión a través del icono de logout de la barra de navegación, o directamente borrar la cuenta de usuario a través del botón "Borrar cuenta" que se encuentra en la esquina inferior izquierda del perfil de usuario

