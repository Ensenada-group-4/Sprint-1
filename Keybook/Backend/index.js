const express = require('express');
const bcrypt = require("bcrypt");
const sequelize = require('./db/connection.js');
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyParser.json())

const salt = 10;

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
        const hashPassword = await bcrypt.hash(password, salt);

        //Impedimos que se cree cuenta si el email ya está registrado
        const emailExists = await sequelize.query("SELECT * FROM user WHERE email = ?", { type: sequelize.QueryTypes.SELECT, replacements: [email] })
        if (emailExists.length > 0) {
            return res
                .status(400)
                .json({ error: "El email ya está registrado" })
        } else {
            const newUser = await sequelize.query(
                `INSERT INTO user (name, email, password) VALUES (?, ?, ?)`,
                {
                    type: sequelize.QueryTypes.INSERT,
                    replacements: [
                        name,
                        email,
                        hashPassword
                    ],
                }
            );
            res.status(200)
                .send({
                    user_id: newUser[0],
                    name,
                    email,
                    hashPassword
                })
            console.log("Usuario creado con éxito")
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//POST login 
app.post("/auth", async (req, res) => {
    try {
        const { email, password} = req.body;
        console.log(password)
        const result = await sequelize.query(
            `SELECT * FROM user WHERE  email = '${email}'`);
        if (result[0].length) {
            const validPassword = await bcrypt.compare(password, result[0][0].password)
            if (validPassword) { res.status(200).send({ id: result[0][0].id }); } else {
                res.status(400).send({ error: "Contraseña incorrecta" });
            }
        } else {
            res.status(400).send({ error: "Email no encontrado en base de datos" });
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//POST posts
app.post("/posts", async function (req, res) {
    console.log("req.body", req.body);
    try {
        const { post_content } = req.body;
        const post_id_user = 1;
        // const post_date = new Date().toString();
        const newPost = await sequelize.query(
            `INSERT INTO post (post_id_user, post_content) VALUES (?, ?)`,
            {
                type: sequelize.QueryTypes.INSERT,
                replacements: [
                    post_id_user,
                    post_content
                ],
            }
        );
        res.status(200).send({
            post_id: newPost[0],
            post_id_user,
            post_content
        });
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//GET posts
app.get('/posts', async function (req, res) {
    try {
        const posts = await sequelize.query(`SELECT * FROM user
        JOIN post ON user.id = post.post_id_user
        WHERE user.id;`, { type: sequelize.QueryTypes.SELECT });
        res.send(posts);
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
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