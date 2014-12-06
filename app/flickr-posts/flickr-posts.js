'use strict';

angular.module('demo.FlickrPosts', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/flickr-posts', {
      templateUrl: 'flickr-posts/flickr-posts.html',
      controller: 'FlickrPostsCtrl',
      controllerAs: 'flickr'
    });
  }])

  .controller('FlickrPostsCtrl', ['$route', 'flickr', function($route, flickr) {
    var ctl = this;

    var tag = $route.current.params.tag;
    flickr.loadPosts(tag).then(function(posts) {
      ctl.posts = posts;
    });
  }]);