//npm i sequelize
//npm i cors
const Sequelize = require("sequelize");
const path = "mysql://root@localhost:3306/keybook";
const sequelize = new Sequelize(path, { operatorAliases: false });

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado: keybook base de datos");
  })
  .catch((err) => {
    console.error("Error de conexión:", err);
  });

module.exports = sequelize;

// Definimos una función para insertar los datos de newUser en la base de datos
function insertarUsuario(user) {
  // Realizamos una consulta INSERT utilizando los datos de newUser y la conexión a la base de datos
  connection.query(
    `INSERT INTO usuarios (name,last_name,email,date_of_birth,profile_picture
        ,city,country,phone,) 
        VALUES ('${user.name}''${user.fullName}', '${user.city}','${user.country}', '${user.dateOfBirth}', '${user.email}', '${user.phone}','${user.password}','${user.password}')`,
    (err, result) => {
      if (err) throw err;
      console.log("Usuario agregado correctamente");
    }
  );
}

// Llamamos a las funciones personalDetails y contactInformation para actualizar el objeto newUser
personalDetails();
contactInformation();

// Llamamos a la función insertarUsuario para enviar los datos de newUser a la base de datos
insertarUsuario(newUser);

// Cerramos la conexión con la base de datos
connection.end();
