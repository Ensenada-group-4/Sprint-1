const express = require('express');
const path = require("path")

const app = express();
const port = 3000;


app.use(express.json())
// app.use(express.static(path.join(__dirname, "..", "Frontend", "css")));
// app.use(express.static("Keybook"));
// app.use(express.static("public"));
// app.use('/static', express.static("Keybook"))



app.get("/", (req, res) => {
    // console.log((path.join(__dirname, "..", "Frontend", "css")))
    res.sendFile(path.join(__dirname, "..", "Frontend", "html", "formLogin.html"))
})




app.listen(port, () => { console.log(`Server listening on port ${port}`) });