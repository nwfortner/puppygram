var Post = require('./models/postModel.js');

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

module.exports.savePost = savePost;
module.exports.getPosts = getPosts;
