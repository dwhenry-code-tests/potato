'use strict';

angular.module('demo.flicker', ['ngResource'])

  .value('flicker-host', 'http://api.flickr.com')

  .service('flicker', ['$http', '$q', 'flicker-host', function($http, $q, host) {
    var posts = [];


    var postsPromise;
    this.loadPosts = function() {
      if(posts) {
        $q.when(posts)
      }
      return postsPromise = postsPromise || $http.
        jsonp(
        host + '/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK&tags=potato&tagmode=all&format=json#'
      ).
        then(function(response) {
          return posts = response.data.items;
        });
    };


  }]);
