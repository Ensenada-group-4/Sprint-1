// npm install
// npm init, le damos a todo que sí
// npm i express
const express = require('express');
const app = express();
const sequelize = require('./db/connection.js');
const bodyParser = require("body-parser")
var cors = require('cors')

app.use(cors());
app.use(bodyParser())

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

app.post("/register", async function (req, res) {    
    try {
        const { name, last_name, email, password } = req.body;
        const newUser = await sequelize.query(
            `INSERT INTO user (name, last_name, email, password) VALUES (?, ?, ?, ?)`,
            {
                type: sequelize.QueryTypes.INSERT,
                replacements: [
                    name,
                    last_name,
                    email,
                    password
                ],
            }
        );
        res.status(200).send({
            user_id: newUser[0],
            name, 
            last_name,
            email, 
            password
        });
        console.log("User created successfully")
        console.log("New user data", req.body);
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});


















// // el post para subir el usuario
app.post("/login", (req, res) => {
    const username = req.body.user.name;
    const password = req.body.user.password;
    if (username && password) {
        connection.query(
            `SELECT * FROM user WHERE (name = ? OR email = ?) AND password = ?`,
            [username, username, password],
            (error, results, fields) => {
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = results[0].username;
                    res.redirect("/dashboard.html");
                } else {
                    res.send("Usuario o contraseña incorrectos.");
                }
                res.end();
            }
        );
    } else {
        res.send("Por favor, introduce tu nombre de usuario y contraseña.");
        res.end();
    }
});
// // Configurar middleware para validar sesión en todas las rutas excepto login
// app.use((req, res, next) => {
//     if (req.path === "/" || req.path === "/login") {
//         next();
//     } else if (req.session.loggedin) {
//         next();
//     } else {
//         res.redirect("/");
//     }
// });

app.listen(3000, function () {
    console.log("Sistema funcionando en el puerto 3000");
});