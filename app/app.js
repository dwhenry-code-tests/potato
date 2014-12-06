'use strict';

// Declare app level module which depends on views, and components
angular.module('demo', [
  'ngRoute',
  'demo.FlickrPost',
  'demo.FlickrPosts',
  'demo.flickr',
  'demo.ordinalDate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/flickr-posts'});
}]);
