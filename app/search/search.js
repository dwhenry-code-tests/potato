'use strict';

angular.module('demo.Search', ['ngRoute'])

  .directive('demoSearch', ['$location', '$route', '$timeout', function($location, $route, $timeout) {
    return {
      link: link,
      restrict: 'E',
      templateUrl: 'search/search.html',
      transclude: true
    };

    function link(scope, element, attr) {
      scope.searchValue = $route.current.params[attr.name] || attr.default;

      element.bind('keydown', function(e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
          e.preventDefault();
          scope.search();
        }
      });

      scope.search = function() {
        var searchObj = {};
        searchObj[attr.name] = scope.searchValue;
        $timeout(function() { $location.search(searchObj); });
      }
    }
  }]);