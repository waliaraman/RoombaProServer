//Dependencies 
var express = require('express');
var roomba = express.Router();


roomba.get('/', function(req, res){
	res.send('working');
});

roomba.post('/', function(req, res){
	res.send('Action is to ' + req.body.action + " to " + req.body.direction);
});


module.exports = roomba;




