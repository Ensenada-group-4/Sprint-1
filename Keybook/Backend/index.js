// npm install
// npm init, le damos a todo que sí
// npm i express
const express = require('express');
const app = express();
const sequelize = require('./db/connection.js');
var cors = require('cors')
app.use(cors());

async function findAllRows() {
    return await sequelize.query("Select * from user", { type: sequelize.QueryTypes.SELECT })
        .then(function (personas) {
            // console.log(personas);

        });
}

// findAllRows();

app.get('/user', async function (req, res) {
    console.log("instance")
    try {
        const personas = await sequelize.query("SELECT * FROM user", { type: sequelize.QueryTypes.SELECT });
        console.log(personas);
        res.send(personas);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(3000, function () {
    console.log("Sistema funcionando en el puerto 3000");
});