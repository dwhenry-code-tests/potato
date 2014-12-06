'use strict';

angular.module('demo.FlickrPosts', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/flickr-posts', {
      templateUrl: 'flickr-posts/flickr-posts.html',
      controller: 'FlickrPostsCtrl',
      controllerAs: 'flickr'
    });
  }])

  .controller('FlickrPostsCtrl', ['flickr', function(flickr) {
    var ctl = this;

    flickr.loadPosts().then(function(posts) {
      ctl.posts = posts;
    });
  }]);