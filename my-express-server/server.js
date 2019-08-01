//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at Nurrizkyimani");
});

app.get("/about", function(req, res){
    res.send("Nurrizky Imani is Awesome guy & really good boye");
});

app.get("/resume", function(req, res){
    res.send("He doesnt have any capability");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
 