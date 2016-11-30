var AppView = Backbone.View.extend({
  initialize: function() {
    this.postCollection = new PostCollection()
    this.postCollectionView = new PostCollectionView({collection: this.postCollection});
    this.addPostView = new AddPostView({collection: this.postCollection});
    this.render();
  },
  render: function() {
    this.$el.html([this.addPostView.$el, this.postCollectionView.$el]);
  }
});
