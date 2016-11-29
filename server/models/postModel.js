var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  imgUrl: String,
  username: String,
  caption: String,
  timestamp: Date,
});

var Post = mongoose.model('posts', postSchema);

module.exports = Post;
