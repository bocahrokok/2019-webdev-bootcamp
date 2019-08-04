const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
    res.sendFile(__dirname+ "/signup.html");
});


app.post("/", function(req, res){
    
    var firstName =  res.body.fName;
    var lastName = res.body.lName;
    var email = res.body.email;

    console.log(firstName, lastName, email)
});







app.listen(3000, function(req, res){
    console.log("port listen to i love you port 3000")
});

