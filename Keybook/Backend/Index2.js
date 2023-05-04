const express = require('express');
const app = express();
const sequelize = require('./db/connection.js');
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors());
//body parser
app.use(bodyParser());
//
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

app.get('/posts', async function (req, res) {
    console.log("instance")
    try {
        const posts = await sequelize.query(`SELECT * FROM post, user`, { type: sequelize.QueryTypes.SELECT });

        console.log(posts);
        res.send(posts);
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

// app.get('/user', async function (req, res) {
//     console.log("instance")
//     try {
//         const personas = await sequelize.query("SELECT * FROM user", { type: sequelize.QueryTypes.SELECT });
//         console.log(personas);
//         res.send(personas);

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error interno del servidor');
//     }
// });

app.listen(3000, function () {
    console.log("Sistema funcionando en el puerto 3000");
});