//importante instalar express, el body parser (npm i body-parser) y el jwt(npm i express-jwt)
//para probarlo bastaría con lanzar el server y usando postman en el localhost/login, usando el metodo post, incluirle en raw esta info: {"name":"user","password":"password"} en formato json, nos daría entonces un numero cifrado.

var express = require('express');
//este body pàrser es un middleware de node para analizar las solicitudes entrantes(es decir metodo post para enviar el email desde html y similar)
var bodyParser = require('body-parser');
//esto es un sistema que crea objetos json cifrados para pasar info segura a bases de datos
var jwt = require('jsonwebtoken');
//
var expressJwt = require('express-jwt');

var app = express();
//vamos a crear la clave de encriptacion del token, o firma
var jwtKey = ('clave_deseada');
//va a publicarse publicamente, siendo esto middleware en express que se utiliza para servir archivos estáticos como imágenes, archivos CSS y archivos JavaScript.
app.use(express.static('publica'));
//middleware de node que se utiliza con Express para analizar y procesar los datos como json.
app.use(bodyParser.json());

//pàra verificar que el login sea seguro
var user = [{
    name: "user",
    password: "password"
}];

//creamos un endpoint para probarlo
app.post("/login", function (req, res) {
    if (req.body.name == user.name || req.body.key == user.key) {
        //ahora metemos le token con la firma
        var token = jwt.sign({ user: "user" }, jwtKey);
        res.send(token);
    } else {
        res.status(401).end("usuario incorrecto");
    }
})

app.listen(3000, function () {
    console.log("Sistema funcionando en el puerto 3000");
});