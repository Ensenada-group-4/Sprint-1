const express = require('express');
// const bcrypt = require("bcrypt");
const sequelize = require('./db/connection.js');
const bodyParser = require("body-parser")
var cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyParser.json())

// GET home page
app.get('/', function (req, res, next) {
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
app.get('/users/id_5', async function (req, res) {
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

// GET user studies
// app.get('/studies/:studies_user_id', async function (req, res) {
//     console.log("instance")
//     try {
//         const studios = await sequelize.query(`SELECT * FROM `studies` WHERE studies_id = ${studies_user_id} `, { type: sequelize.QueryTypes.SELECT });
//         console.log(studios);
//         res.send(studios);

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error interno del servidor');
//     }
// });
app.get('/studies/:studies_user_id', async function (req, res) {
    const userId = req.params.studies_user_id;
    const result = await sequelize.query(
        `SELECT * FROM studies WHERE studies_user_id = ${userId}`
    );
    if (result[0].length) {
        res.status(200).send(result[0][0]);
    } else {
        res.status(404).send({ error: "Usuario no encontrado" });
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

//POST login 
app.post("/auth", async (req, res) => {
    const { user, password } = req.body;
    const result = await sequelize.query(
        `SELECT * FROM user WHERE (name = '${user.name}' OR email = '${user.email}') AND password = '${password}'`
    );
    if (result[0].length) {
        res.status(200).send({ id: result[0][0].id });
    } else {
        res.status(400).send({ error: "Usuario o password incorrecto" });
    }
});


//POST posts
app.post("/posts", async function (req, res) {
    console.log("req.body", req.body);
    try {
        const { post_id_user, post_content } = req.body;
        // const userId = req.session.userId; // retrieve user ID from session
        console.log(post_id_user)
        const newPost = await sequelize.query(
            `INSERT INTO post (post_id_user, post_content) VALUES (?, ?)`,
            {
                type: sequelize.QueryTypes.INSERT,
                replacements: [post_id_user, post_content],
            }
        );
        res.status(200).send({
            post_id: newPost[0],
            post_id_user,
            post_content,
        });
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//GET posts
app.get('/posts', async function (req, res) {
    console.log("instance")
    try {
        const posts = await sequelize.query(`SELECT * FROM user
        JOIN post ON user.id = post.post_id_user
        WHERE user.id;`, { type: sequelize.QueryTypes.SELECT });

        console.log(posts);
        res.send(posts);
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//endpoint para los user.id del login
app.get("/users/:userId", async (req, res) => {
    const userId = req.params.userId;
    const result = await sequelize.query(
        `SELECT * FROM user WHERE id = ${userId}`
    );
    if (result[0].length) {
        res.status(200).send(result[0][0]);
    } else {
        res.status(404).send({ error: "Usuario no encontrado" });
    }
});

//TODO GET users by input
// app.get("/user", async function (req, res) {
//     const { searchKey } = req.query;
//     console.log("instance");
//     try {

//       cond?true:false

//       const personas = searchKey
//         ? await sequelize.query(
//             `SELECT * FROM user WHERE name % ${searchKey} OR email % ${searchKey}  `,
//             {
//               type: sequelize.QueryTypes.SELECT,
//             }
//           )
//         : await sequelize.query("SELECT * FROM user", {
//             type: sequelize.QueryTypes.SELECT,
//           });
//       console.log(personas);
//       res.send(personas);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Error interno del servidor");
//     }
//   });

app.listen(3000, function () {
    console.log("Sistema funcionando en el puerto 3000");
});