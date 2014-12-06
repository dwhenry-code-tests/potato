'use strict';

angular.module('demo.FlickerPost', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/flicker-posts/:index', {
      templateUrl: 'flicker-post/flicker-post.html',
      controller: 'FlickerPostCtrl',
      controllerAs: 'flicker'
    });
  }])

  .controller('FlickerPostCtrl', ['$route', 'flicker', function($route, flicker) {
    var ctl = this;
    var index = $route.current.params.index;

    flicker.loadPosts().then(function(posts) {
      ctl.post = posts[index];
    });
  }]);