//Dependencies 
var express = require('express');
var router = express.Router();


// Register Roomba API

// Roomba specific APIs
var roobaApi = require('../roomba/roombaapis');
router.use('/roomba', roobaApi);

router.get('/pingtodiscover', function(req, res){
	res.send("I know you");
});

// return router
module.exports = router ;