const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    res.send("Server is running");
})

app.listen(3000, function() {
    console.log("");
})