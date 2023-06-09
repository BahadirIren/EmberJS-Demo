import EmberRouter from '@ember/routing/router';
import config from 'demo-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tutorial');
  this.route('about');
});