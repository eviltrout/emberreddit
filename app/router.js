import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberredditENV.locationType
});

Router.map(function() {
  this.resource('subreddit', { path: '/r/:subreddit_id' });
});

export default Router;
