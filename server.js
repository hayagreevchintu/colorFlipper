const express = require("express");
const app = express();
require('dotenv').config({path: __dirname + '/.env'});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (rew, res) => {
    res.render("home");
});

app.get("/simple", (req, res) => {
    res.render("color", {type: "simple"});
});

app.get("/hex", (req, res) => {
    res.render("color", {type: "hex"});
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});