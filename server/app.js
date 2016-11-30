var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('./db/db.js');
var handlers = require('./handlers.js');
var cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('../client'));

app.get('/messages', handlers.getPosts);

app.post('/messages', handlers.savePost);

app.post('/users', handlers.createUser);


app.listen(3000, function() {
  console.log('backbone server listening on port 3000');
});
