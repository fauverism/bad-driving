'use strict';

/**
 * @ngdoc function
 * @name baddriversApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baddriversApp
 */
angular.module('baddriversApp')
  .controller('MainCtrl', function (dataService, $scope) {
    dataService.fiveThirtyEight()
      .then(function(result) {
        console.log(result.data);
        $scope.fiveThirtyEight = result.data;
      }, function(err) {
        console.log(err);
      });
  });
