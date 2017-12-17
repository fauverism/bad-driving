/* global angular */
/* global _ */
/* jshint unused:false, latedef:false*/
(function(angular) {
  'use strict';

  angular.module('baddriversApp').factory('dataService', dataService);

  function dataService($http) {
    return {
      fiveThirtyEight: function() {
        return $http.get('/data/fivethirtyeight/bad-drivers-converted.json');
      }
    };
  }

})(angular);

