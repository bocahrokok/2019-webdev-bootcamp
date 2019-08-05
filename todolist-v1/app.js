const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case value:
            day = "sunday";
            break;
        case value:
            day = "monday";
            break;
        case value:
            day = "tuesday";
            break;
        case value:
            day = "wednesday";
            break;
        case value:
            day = "thursday";
            break;
        case value:
            day = "friday";
            break;
        case value:
            day = "sabtu";
            break;

        default:
            console.log("Error: no day is equal to");
            break;
    }

    res.render("list", {
        kindOfDay: day;
    })

    

    

});






app.listen(3000, function(){
    console.log("server started on port 3000");
});