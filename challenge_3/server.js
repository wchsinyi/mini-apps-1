

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('mysql');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// respond with "hello world" when a GET request is made to the homepage
app.post('/postData/user', function (req, res) {
  var colNames = {
    1: ['name', 'email', 'passcode'],
    2: ['line 1', 'line 2', 'city', 'state', 'zip code'],
    3: ['credit card #', 'expiration date', 'CVV', 'billing zip code']
  }
  var link, colNames;
  switch (step) {
    case 1: link = 'user' 
    case 2: link = 'address'
    case 3: link = 'creditCard'
  }
  var req = JSON.parse(req.body.input);
  var postStr = 'INSERT INTO' +link + '(' + colNames[JSON.parse(req.body.step)].join(', ') + ') VALUES (' +  ')' 
  + new Array(colNames[JSON.parse(req.body.step)].length).fill('?').join(', ');
  db.query(postStr, req.body.input, (err, res) => {
    if (err) {
      res.setHeader(505).send(err.toString());
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    res.send('hello world');
  })
})




app.listen(3000);



