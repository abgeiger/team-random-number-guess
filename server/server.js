var express = require('express');
var app = express();
var randomNumber = require('./modules/randomNumber.js');
var port = 5000;

app.use(express.static('server/public'));

app.get('/easy', function(req, res){
    res.send({number: randomNumber(1, 10)});
});

app.get('/medium', function(req, res){
  res.send({number: randomNumber(1, 20)});
});

app.get('/hard', function(req, res){
  res.send({number: randomNumber(1, 30)});
});



app.listen(port, function(){
  console.log('listening on port', port);
});



