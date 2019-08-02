



const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");

});


app.post("/", function(req, res){

    var wei = Number(req.body.wei);
    var hei = Number(req.body.hei);

    var result = wei/hei;

    res.send("The result of the calculator is " + result);
});

app.listen(5000, function(res, req){
    console.log("Server started on port 5000");
});