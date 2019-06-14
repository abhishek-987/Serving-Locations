var express = require('express');
var http = require('http');
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.use('/css',express.static(__dirname +'/css'));
app.listen(8080);