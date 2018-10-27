var express = require('express');
var fs = require('fs');
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

app.get('/personal', function(req, res) {
  res.send('Your personal stats:');
});

app.get('/socialmedia', function(req, res) {
  res.send('Share to social media:');
});

app.get('/video', function(req, res) {
  const path = 'media/test.mp4'
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
