'use strict';

angular.module('demo.FlickrPost', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/flickr-posts/:index', {
      templateUrl: 'flickr-post/flickr-post.html',
      controller: 'FlickrPostCtrl',
      controllerAs: 'flickr'
    });
  }])

  .controller('FlickrPostCtrl', ['$route', 'flickr', function($route, flickr) {
    var ctl = this;
    var index = $route.current.params.index;

    flickr.loadPosts().then(function(posts) {
      ctl.post = posts[index];
    });
  }]);