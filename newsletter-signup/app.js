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
    
    var firstName =  req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var option = {
        url
    }


    request(options, function(error, response, body){

    })



});


//ecf479bae5

//9f9fe9302b0c962e45de029ed5b2b570-us3



app.listen(3000, function(req, res){
    console.log("port listen to i love you port 3000")
});

