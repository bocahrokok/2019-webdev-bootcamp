const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.listen(3000, function(req, res){
    console.log("port listen to i love you port 3000")
});


get