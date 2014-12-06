'use strict';

angular.module('demo.FlickerPost', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/flicker-posts/:id', {
      templateUrl: 'flicker-post.html',
      controller: 'FlickerPostCtrl',
      controllerAs: 'flicker'
    });
  }])

  .controller('FlickerPostCtrl', ['$route', 'flicker', function($route, flicker) {
    this.post = flicker.loadPosts()[$route.current.params.id];
  }]);