'use strict';

angular.module('demo.FlickerPosts', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/flicker-posts', {
      templateUrl: 'flicker-posts/flicker-posts.html',
      controller: 'FlickerPostsCtrl',
      controllerAs: 'flicker'
    });
  }])

  .controller('FlickerPostsCtrl', ['flicker', function(flicker) {
    var ctl = this;

    flicker.loadPosts().then(function(posts) {
      ctl.posts = posts;
    });
  }]);