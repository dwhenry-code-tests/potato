'use strict';

angular.module('demo.flickr', ['ngResource'])

  .value('flickr-host', 'http://api.flickr.com')

  .service('flickr', ['$http', '$q', 'flickr-host', function($http, $q, host) {
    var posts = [];


    var postsPromise, lastTagSearch;
    this.loadPosts = function(tag) {
      tag = tag || 'potato';
      if(posts && lastTagSearch === tag) {
        return $q.when(posts)
      }

      lastTagSearch = tag;
      return $http.
        jsonp(
        host + '/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK&tags=' + tag + '&tagmode=all&format=json#'
      ).
        then(function(response) {
          return posts = response.data.items;
        });
    };


  }]);
