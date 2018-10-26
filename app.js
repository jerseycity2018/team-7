var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/map', function(req, res) {
  res.send('Map:');
});

app.get('/leaderboard', function(req, res) {
  res.send('Leaderboard:');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
