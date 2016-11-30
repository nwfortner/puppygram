var SignupView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click .signupButton': 'addUser'
  },

  addUser: function() {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/users',
      data: {
        username: $('.username').val(),
        password: $('.password').val()
      }
    }).done(function(message) {
      window.username = $('.username').val();
      router.navigate('index', {trigger: true});
      console.log(message);
    });
  },

  render: function() {
    this.$el.html(`
      <div class='singupDiv'>
        <input class='username' type='text' placeholder='username'/>
        <input class='password' type='text' placeholder='password'/>
        <button class='signupButton'>signup</button>
      </div>
    `);
  }
});
