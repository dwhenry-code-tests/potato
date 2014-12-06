'use strict';

// Declare app level module which depends on views, and components
angular.module('demo', [
  'ngRoute',
  'demo.FlickerPost',
  'demo.FlickerPosts',
  'demo.flicker',
  'demo.ordinalDate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/flicker-posts'});
}]);
