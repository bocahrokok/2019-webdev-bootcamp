//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var crypto = req.body.crypto;
    var fiat = req.body.fiat;

    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"
    
    var finalURL = baseURL + crypto + fiat;

    request("finalURL", function(error, response, body){

        var data = JSON.parse(body);
        var price = data.averages.week;

        res.send("<h1> The current price of "+ crypto + " is " + price +  "USD </h1>");

    });
    
    
});


app.listen(3000, function(req, res){
    console.log("asu bajingan 3000");
});
