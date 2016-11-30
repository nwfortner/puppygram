var Post = require('./models/postModel.js');
var User = require('./models/userModel.js');

var savePost = function(req, res) {
  console.log(req.body);
  var post = new Post({
    imgUrl: req.body.imgUrl,
    username: req.body.username,
    caption: req.body.caption,
    timestamp: Date.now()
  });
  post.save(function(err, post) {
    if(err) {
      console.log(err);
      res.status(500).json(err);
    }else {
      console.log('this post was saved to the database: ', post);
      res.status(201).json(post);
    }
  });
};

var getPosts = function(req, res) {
  Post.find(function(err, posts) {
    if(err) {
      console.log(err);
      res.status(500).json(err);
    }else {
      console.log('you got allll the posts!!!');
      res.status(200).json(posts);
    }
  });
};

var createUser = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });
  user.save(function(err, user) {
    if(err) {
      console.log(err);
      res.status(500).json(err);
    }else {
      console.log(user.username + ' was added to the database');
      res.status(201).send('you successfully signed up!!! :)');
    }
  });
};

module.exports.savePost = savePost;
module.exports.getPosts = getPosts;
module.exports.createUser = createUser;
