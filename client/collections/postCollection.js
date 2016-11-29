var PostCollection = Backbone.Collection.extend({
  initialize: function() {
    this.fetch({reset: true});
  },
  url: 'http://localhost:3000/messages',
  parse: function(posts) {
    console.log(posts);
  }
});
