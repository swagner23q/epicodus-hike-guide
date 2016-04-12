import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('weather');
  this.route('gmaps');
  this.route('trails');
});

export default Router;
