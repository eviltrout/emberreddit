var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('subreddit', { path: '/r/:subreddit_id' });
});

export default Router;
