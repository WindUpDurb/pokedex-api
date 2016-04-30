"use strict";

var express = require("express");
var router = express.Router();

router.get("/", function (request, response) {
    var pathToIndex = "/home/david/Code/poke_api/views/index.html";
    response.sendFile(pathToIndex);
});

module.exports = router;