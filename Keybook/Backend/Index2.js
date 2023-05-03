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
        const { post_id_user, post_content } = req.body;
        const post_date = new Date().toString();
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

app.listen(3000, function () {
    console.log("Sistema funcionando en el puerto 3000");
});