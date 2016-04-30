"use strict";

const PORT = process.env.PORT || 3000;

var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/", require("./routes/index"));


app.listen(PORT, function (error) {
    console.log(error || `Server listening on port ${PORT}`);
});