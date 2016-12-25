// dependencies 
var express = require('express');
var bodyParser = require('body-parser');



// Express 
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));


// Server Start
app.listen(3000	, "0.0.0.0");    
console.log('Roomba Pro running on port 3000');