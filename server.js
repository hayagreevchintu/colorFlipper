const express = require("express");
const app = express();
require('dotenv').config({path: __dirname + '/.env'});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/simple", (req, res) => {
    res.render("index");
});

app.get("/hex", (req, res) => {
    res.render("hex");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});