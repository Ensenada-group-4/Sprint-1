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

// el usuario alicia
app.get('/user/id_5', async function (req, res) {
    console.log("instance")
    try {
        const alicia = await sequelize.query("SELECT * FROM `user` WHERE USER.id = 5 ", { type: sequelize.QueryTypes.SELECT });
        console.log(alicia);
        res.send(alicia);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

//sacar estudios
app.get('/studies/studies_id_3', async function (req, res) {
    console.log("instance")
    try {
        const alicia_studios = await sequelize.query("SELECT * FROM `studies` WHERE STUDIES.studies_id = 3 ", { type: sequelize.QueryTypes.SELECT });
        console.log(alicia_studios);
        res.send(alicia_studios);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(3000, function () {
    console.log("Sistema funcionando en el puerto 3000");
});