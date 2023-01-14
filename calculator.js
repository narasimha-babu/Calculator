//jshint esversion:6

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
var a,b,c;



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res){
    var n1 = Number( req.body.num1) ;
    var n2 = Number( req.body.num2) ;
    var result = n1 + n2;

    res.send("The Calculation Result is " + result);
});


app.listen(port, function(){
    console.log("Server started at port 3000");
})