const express = require('express');
const bodyParser = require('body-parser');
var app = express();

const Point = require('./routes/point.route');
const User = require('./routes/user.route');

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/map', function(req, res) {
	res.send('Map:');
});

app.get('/leaderboard', function(req, res) {
	res.send('Leaderboard:');
});

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/test';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/points', Point);
app.use('/user', User);

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
