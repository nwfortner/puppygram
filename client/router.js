var Router = Backbone.Router.extend({
  routes: {
    '': 'signup',
    'signup': 'signup',
    'index': 'index'
  },

  signup: function() {
    router.navigate('signup');
    $('body').append(new SignupView().$el);
  },

  index: function() {
    router.navigate('index');
    $('body').empty();
    $('body').append(new AppView().$el);
  }

});
