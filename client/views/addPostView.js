var AddPostView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click .addPostButton': 'addPost'
  },

  addPost: function() {
    var that = this;
    $.ajax({
      url: 'http://localhost:3000/messages',
      method: 'POST',
      data: {
        username: 'Nick',
        imgUrl: $('.postUrl').val(),
        caption: $('.addCaption').val()
      }
    }).done(function(post) {
      that.collection.fetch();
      $('.addCaption').val('');
      $('.postUrl').val('');
    });
  },

  render: function() {
    this.$el.addClass('nav');
    this.$el.html([
      $.cloudinary.unsigned_upload_tag('slbywqj3', {cloud_name: 'puppygram'}),
      `<input type='text' class='postUrl' placeholder='postUrl'/>
      <input type='text' class='addCaption' placeholder='caption'>
      <button class='addPostButton'>Submit</button>`
    ]);
  }
});
