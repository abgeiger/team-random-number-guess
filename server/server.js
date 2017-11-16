var express = require('express');
var app = express();
var easyMode = require('./modules/easy.js');
var randomNumber = require('./modules/randomNumber.js');
var port = 5000;

app.use(express.static('server/public'));

app.get('/easy', function(req, res){
    res.send(easyMode());
});

app.listen(port, function(){
  console.log('listening on port', port);
  console.log(randomNumber(0, 100));
});



