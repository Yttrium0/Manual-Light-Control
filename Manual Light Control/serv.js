var express = require("express");
var app = express();
var exec = require('child_process').exec;
var status = null;

console.log("test 1");

app.get("/", function(req, res){
    exec("gpio read 28", function(error, stdout, stderr){
        status = stdout;
        console.log("status function " + status);
        if(status == 0){
            console.log("Etat : OFF");
            res.render("source.ejs", {etat: 'OFF'});
        }else if(status == 1){
            console.log("Etat : ON");
            res.render("source.ejs", {etat: 'ON'});
        }
    });
});

app.get("/button", function(req, res){
    exec("lumiere.sh", function(error, stdout, stderr){
        console.log(stdout);
        res.render("redirect.ejs");
    })
});

app.listen(80);