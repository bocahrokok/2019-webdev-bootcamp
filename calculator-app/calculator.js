
const express = require("express");

const app = express();

app.get("/", function(res,req){
    res.setEncoding("Iki rumah su");
})

app.listen(4000, function(){
    console.log("Server started on port 4000");
});