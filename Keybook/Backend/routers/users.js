//importamos las info desde connection.js con una coleccion de conexiones pool
const { Router } = require('express');
const pool = require('../db/connection');
const router = Router();

//metemos router.get que es funcion de enrutamiento para luego solicitar por get la tabla de friend
router.get("/friend/:friend_user_id_1", async (req, res) => {
    const friend_id = req.params.friend_user_id_1; console.log(friend_id);
    try {
        //esta funcion ejecuta consulta al sql donde ya haya un pool de conxiones y luego liberamos la conexion
        /* const connection = await pool.query(); */
        const [rows, fields] = await pool.query(
            "SELECT * FROM user " +
            "INNER JOIN friend on friend.friend_user_id_2 = user.id " +
            "WHERE friend.friend_user_id_1 = ? ", //el valor se pasa con un parametro
            [friend_id]
        ); console.log()
        res.json(rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener los amigos del usuario" });
    }

});

module.exports = router;
