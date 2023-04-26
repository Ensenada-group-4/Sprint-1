//instalamos el mysql con la temrinal npm i mysql2 y tambien npm install --save mysql2
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: '127.0.0.1', //ip del server en local
    user: 'root', //usuario default
    password: '', //no hay
    database: 'keybook', //nuestra base de datos
    charset: 'utf8mb4_general_ci' //caracteres del servidor
});

//se establece la conexion a la base de datos con el metodo getConnection
pool.getConnection()
    .then(connection => {
        console.log('Conexion activa a la base de datos')
        connection.release()
    })
    .catch(error => {
        console.log('Error en base de datos: ', error);
    });

//exporto el objeto pool para usarlo en otro sitio
module.exports = pool;
