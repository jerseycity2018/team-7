const express = require('express');
const bodyParser = require('body-parser');
var app = express();

const Point = require('../routes/point.route');

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/map', function(req, res) {
	res.send('Map:');
});

app.get('/leaderboard', function(req, res) {
	res.send('Leaderboard:');
});

//app.use('/points', Point);

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
