// npm install
// npm init, le damos a todo que sí
// npm i express
const express = require('express');
const path = require("path")
const user = require('./routers/users.js');
const app = express();
const port = 3001;

app.use(express.json())
// app.use(express.static(path.join(__dirname, "..", "Frontend", "css")));
// app.use(express.static("Keybook"));
// app.use(express.static("public"));
// app.use('/static', express.static("Keybook"))

app.get("/", (req, res) => {
    // console.log((path.join(__dirname, "..", "Frontend", "css")))
    res.sendFile(path.join(__dirname, "..", "Frontend", "html", "formLogin.html"))
})
app.use('/', user)
app.listen(port, () => { console.log(`Server listening on port ${port}`) });