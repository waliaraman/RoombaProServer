//Dependencies 
var express = require('express');
var roomba = express.Router();
var robot = require("./roombaapi");
var SPEED = 100; // 100mm/s
var roombaReady = false;
console.log('init roomba');
robot.init({ serialport: "/dev/tty.usbserial-00000000" });
robot.on('ready', function() {
	console.log('roomba is ready');
	roombaReady = true;
});


roomba.get('/', function(req, res){
	console.log('req received');
	// start by going forward
	if (roombaReady) {
		console.log('roomba ready, firing the event');
		robot.demo(0);
	} else {
		console.log('rooba not ready... waiting..');
        setInterval(function() {
			console.log('roomba ready, firing the event');
			robot.demo(0);
		}, 2000);
	}

	res.send('working');
});

roomba.post('/', function(req, res){
	res.send('Action is to ' + req.body.action + " to " + req.body.direction);
});


module.exports = roomba;




