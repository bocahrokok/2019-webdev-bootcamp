//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
    //res.sendFile("index.html");
});


app.post("/", function(req, res){

    console.log(req.body);
    res.send("Thanks for sending that");
});



app.listen(4000, function(){
    console.log("Server started on port 4000");
});