var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.once('open', function() {
  console.log('mongoose has an open connection');
});

module.exports = db;
