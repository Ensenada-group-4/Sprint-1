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

// GET logged user by ID
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

// GET logged user studies
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
        const { name, lastName, dob, city, country, phone, email, password } = req.body;
        const blankPhoto = "https://i.postimg.cc/SNk2LBzX/blank-Avatar.png"

        // Encrypt the password                
        const hashPassword = await bcrypt.hash(password, salt);

        //Impedimos que se cree cuenta si el email ya está registrado
        const emailExists = await sequelize.query("SELECT * FROM user WHERE email = ?", { type: sequelize.QueryTypes.SELECT, replacements: [email] })
        if (emailExists.length > 0) {
            return res
                .status(400)
                .json({ error: "El email ya está registrado" })
        } else {
            const newUser = await sequelize.query(
                `INSERT INTO user (name, last_name, email, password, date_of_birth, profile_picture, city, country, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                {
                    type: sequelize.QueryTypes.INSERT,
                    replacements: [
                        name, lastName, email, hashPassword, dob, blankPhoto, city, country, phone
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
        const { user, password } = req.body;
        console.log(password)
        const result = await sequelize.query(
            `SELECT * FROM user WHERE  email = '${user.email}'`);
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