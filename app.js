var express = require('express');
var http = require('http');
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.listen(8080);