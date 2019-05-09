

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// respond with "hello world" when a GET request is made to the homepage
app.post('/postData', function (req, res) {
  console.log(req.body);
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.send('hello world');
})


app.listen(3000);
