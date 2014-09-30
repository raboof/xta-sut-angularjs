'use strict';

angular.module('xtaSut.main', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'MainCtrl',
      controllerAs: 'mainCtrl',
      templateUrl: 'main/main.html'
    });
  }])

  .controller('MainCtrl', function () {

  });

