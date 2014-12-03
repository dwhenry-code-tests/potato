// Taken from example code @ http://plnkr.co/edit/nGj08KzQrZTiCP4ubDOc?p=preview


angular.module('demo.ordinalDate', [])

  .filter('ordinalDate', ['$filter', function($filter) {
    var suffixes = ["th", "st", "nd", "rd"];
    return function(input, format) {
      var dateWithoutOrdinal = $filter('date')(input, format);

      var day = parseInt($filter('date')(input, 'dd'));
      var relevantDigits = (day < 30) ? day % 20 : day % 10;

      var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
      return dateWithoutOrdinal.replace('oo', suffix);
    };
  }]);