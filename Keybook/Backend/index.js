const express = require('express');
const path = require("path")

const app = express();
const port = 3000;


app.use(express.json())
app.use(express.static(path.join("..", "Frontend")));
// app.use(express.static("Keybook"));
// app.use(express.static("public"));



app.get("/", (req, res) => {  
    res.sendFile(path.join(__dirname, "..", "Frontend", "html", "formLogin.html"))
})




app.listen(port, () => { console.log(`Server listening on port ${port}`) });