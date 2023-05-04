const express = require('express');
const bcrypt = require("bcrypt");
const sequelize = require('./db/connection.js');
const bodyParser = require("body-parser")
var cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyParser.json())

// GET home page
app.get('/', function(req, res, next) {
    res.send("Keybook server");
  });

//GET users list
app.get('/users', async function (req, res) {   
    try {
        const usersList = await sequelize.query("SELECT * FROM user", { type: sequelize.QueryTypes.SELECT });
        console.log(usersList);
        res.send(usersList);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

// GET user Alicia
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

// GET user Alicia.studies
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

//POST new user
app.post("/register", async function (req, res) {

    try {
        const { name, email, password } = req.body;
        // Encrypt the password
        // TODO cuando esté el login listo hay que revisar si funciona
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(password, salt);

        //Check if email already registered
        // const emailExists = await sequelize.query("SELECT * FROM user WHERE email = ?", { type: sequelize.QueryTypes.SELECT, replacements: [email] })
        // if (emailExists) {
        //     return res
        //         .status(400)
        //         .json({ error: "El email ya está registrado })
        // }
        const newUser = await sequelize.query(
            `INSERT INTO user (name, email, password) VALUES (?, ?, ?)`,
            {
                type: sequelize.QueryTypes.INSERT,
                replacements: [
                    name,                    
                    email,
                    password
                ],
            }
        );
        res.status(200)
            .send({
                user_id: newUser[0],
                name,                
                email,
                password
            })
        console.log("Usuario creado con éxito")

    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//GET users by input
app.get("/user", async function (req, res) {
    const { searchKey } = req.query;
    console.log("instance");
    try {
  
      cond?true:false
  
      const personas = searchKey
        ? await sequelize.query(
            `SELECT * FROM user WHERE name % ${searchKey} OR email % ${searchKey}  `,
            {
              type: sequelize.QueryTypes.SELECT,
            }
          )
        : await sequelize.query("SELECT * FROM user", {
            type: sequelize.QueryTypes.SELECT,
          });
      console.log(personas);
      res.send(personas);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error interno del servidor");
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