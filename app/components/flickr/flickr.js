'use strict';

angular.module('demo.flickr', ['ngResource'])

  .value('flickr-host', 'http://api.flickr.com')

  .service('flickr', ['$http', '$q', 'flickr-host', function($http, $q, host) {
    var posts = [];


    var postsPromise;
    this.loadPosts = function(tag) {
      tag = tag || 'potato';
      if(posts) {
        $q.when(posts)
      }
      return postsPromise = postsPromise || $http.
        jsonp(
        host + '/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK&tags=' + tag + '&tagmode=all&format=json#'
      ).
        then(function(response) {
          return posts = response.data.items;
        });
    };


  }]);
