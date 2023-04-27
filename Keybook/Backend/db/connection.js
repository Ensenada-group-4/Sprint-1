//npm i sequelize
//npm i cors
const Sequelize = require("sequelize");
const path = "mysql://root@localhost:3306/keybook";
const sequelize = new Sequelize(path, { operatorAliases: false });

sequelize.authenticate()
    .then(() => {
        console.log("Conectado: keybook base de datos");
    })
    .catch(err => {
        console.error("Error de conexión:", err)
    })
// .finally(() =>{
//     sequelize.close();
// });


module.exports = sequelize;
