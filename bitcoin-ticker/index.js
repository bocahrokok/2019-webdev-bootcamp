//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(req, res){
    console.log("asu bajingan 3000")
})
