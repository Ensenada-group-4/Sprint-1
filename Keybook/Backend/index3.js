// npm install
// npm init, le damos a todo que sí
// npm i express
const express = require("express");
const app = express();
const sequelize = require("./db/connection.js");
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

async function findAllRows() {
  return await sequelize
    .query("Select * from user", { type: sequelize.QueryTypes.SELECT })
    .then(function (personas) {
      // console.log(personas);
    });
}

// findAllRows();

app.get("/user", async function (req, res) {
  console.log("instance");
  try {
    const personas = await sequelize.query("SELECT * FROM user", {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(personas);
    res.send(personas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});
/*
// el usuario alicia
app.get("/user/id_5", async function (req, res) {
  console.log("instance");
  try {
    const alicia = await sequelize.query(
      "SELECT * FROM `user` WHERE USER.id = 5 ",
      { type: sequelize.QueryTypes.SELECT }
    );
    console.log(alicia);
    res.send(alicia);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

//sacar estudios
app.get("/studies/studies_id_3", async function (req, res) {
  console.log("instance");
  try {
    const alicia_studios = await sequelize.query(
      "SELECT * FROM `studies` WHERE STUDIES.studies_id = 3 ",
      { type: sequelize.QueryTypes.SELECT }
    );
    console.log(alicia_studios);
    res.send(alicia_studios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

// // el post para subir el usuario
app.post("/register", (req, res) => {
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
          res.redirect("/home.html");
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

//indexlogin funcional
const contactForm = document.getElementById("login-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = event.target.elements["username"].value.trim();
  const pass = event.target.elements["password"].value.trim();
  if (user == "Alicia" && pass == "1234") {
    window.location.href = "./home.html";
  } else {
    alert("Usuario y/o contraseña incorrectas");
  }
});
*/

/*

// 1 - Invocamos a Express
const express = require("express");

//2 - Para poder capturar los datos del formulario (sin urlencoded nos devuelve "undefined")
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //además le decimos a express que vamos a usar json
/*
//3- Invocamos a dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env" });

//4 -seteamos el directorio de assets
app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname + "/public"));

//6 -Invocamos a bcrypt
const bcrypt = require("bcryptjs");

//7- variables de session
const session = require("express-session");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// 8 - Invocamos a la conexion de la DB
const connection = require("./database/db");

//9 - establecemos las rutas
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

//10 - Método para la REGISTRACIÓN
app.post("/register", async (req, res) => {
  const user = req.body.user;
  const name = req.body.name;
  //const rol = req.body.rol;
  const pass = req.body.pass;
  //let passwordHash = await bcrypt.hash(pass, 8);
  connection.query(
    "INSERT INTO users SET ?",
    { user: user, name: name, rol: rol, pass: passwordHash },
    async (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render("register", {
          alert: true,
          alertTitle: "Registration",
          alertMessage: "¡Successful Registration!",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 1500,
          ruta: "",
        });
        //res.redirect('/');
      }
    }
  );
});

//11 - Metodo para la autenticacion
app.post("/auth", async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  
  if (user && pass) {
    sequelize.query(
      "SELECT * FROM users WHERE user = ?",
      [user],
      async (error, results, fields) => {
        if (
          results.length == 0 
          
        ) { console.log("no encontrado")
          /*res.render("login", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "USUARIO y/o PASSWORD incorrectas",
            alertIcon: "error",
            showConfirmButton: true,
            timer: false,
            ruta: "login",
          });

          //Mensaje simple y poco vistoso
          //res.send('Incorrect Username and/or Password!');
        } else {
          //creamos una var de session y le asignamos true si INICIO SESSION
         /* req.session.loggedin = true;
          req.session.name = results[0].name;
          res.render("login", {
            alert: true,
            alertTitle: "Conexión exitosa",
            alertMessage: "¡LOGIN CORRECTO!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 1500,
            ruta: "",
          });
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter user and Password!");
    res.end();
  }
});
/*
//12 - Método para controlar que está auth en todas las páginas
app.get("/", (req, res) => {
  if (req.session.loggedin) {
    res.render("index", {
      login: true,
      name: req.session.name,
    });
  } else {
    res.render("index", {
      login: false,
      name: "Debe iniciar sesión",
    });
  }
  res.end();
});

//función para limpiar la caché luego del logout
app.use(function (req, res, next) {
  if (!req.user)
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  next();
});

//Logout
//Destruye la sesión.
app.get("/logout", function (req, res) {
  req.session.destroy(() => {
    res.redirect("/"); // siempre se ejecutará después de que se destruya la sesión
  });
});

app.listen(3000, (req, res) => {
  console.log("SERVER RUNNING IN http://localhost:3000");
});



*/
// 1. Conexión a la base de datos con Sequelize
//Se importa el paquete Sequelize para poder crear la conexión con
//la base de datos y se define la instancia sequelize.
const Sequelize = require("sequelize");
const sequelize = new Sequelize("keybook", {
  dialect: "mysql",
});

// 2. Definir un modelo para la tabla de usuarios
//Se usa el método define como una función de sequelize para crear
//un modelo llamado User para la tabla de usuarios.
const User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// 3. Verificar credenciales en la base de datos al enviar el formulario
//Se obtiene el formulario con un ID especifico y se crea un evento de escucha
//que escucha el evento submit del formulario.
const formLogin = document.querySelector("submit");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  //Se obtienen los valores de los campos 'username' y 'password' del formulario enviado
  // con el evento target.
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;

  //Se utiliza el método findOne de Sequelize para buscar una entrada
  //en la base de datos que tenga tanto el usuario como contraseña que
  //se enviaron en el formulario.
  User.findOne({
    where: {
      username: username,
      password: password,
    },
  })
    .then((user) => {
      if (user) {
        //Si se encuentra una coincidencia para el usuario y contraseña ingresada en la base de datos,
        //se redirecciona al usuario a la página de inicio.
        window.location.href = "./profileDbAlicia.html";
      } else {
        //Si no se encuentra una coincidencia, se muestra una alerta con un mensaje de error al usuario.
        alert("Usuario y/o contraseña incorrectas");
      }
    })
    .catch((error) => {
      //Se registra un mensaje de error en la consola del navegador si ocurre algún
      //error durante la búsqueda en la base de datos.
      console.error("Error al buscar en la base de datos: ", error);
    });
});
