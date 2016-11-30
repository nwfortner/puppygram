var PostCollectionView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('reset', function() {
      this.render();
      console.log('reset');
    }, this);
    this.collection.on('update', function() {
      this.render()
      console.log('update');
    }, this);
  },
  render: function() {
    this.$el.html(
      this.collection.models.map(function(post) {
        return `
        <div class='post'>
          <div class='username'>${post.attributes.username} | <span class='timestamp'>${moment(post.attributes.timestamp).fromNow()}</span></div>
          <img class='postImg' src=${post.attributes.imgUrl}>
          <div class='caption'>${post.attributes.caption}</div>
        </div>
          `;
      }).reverse()
    );
  }

});
