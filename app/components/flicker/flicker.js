'use strict';

angular.module('demo.flicker', ['ngResource'])

  .value('flicker-host', 'http://api.flickr.com')

  .service('flicker', ['$http', 'flicker-host', function($http, host) {
    var posts = [];


    this.loadPosts = function() {
      $http.
        jsonp(
          host + '/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK&tags=potato&tagmode=all&format=json#'
        ).
        then(function(response) {
          posts.length = 0;
          [].push.apply(posts, response.data.items);
        });
      return posts;
    };

  }]);
