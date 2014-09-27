'use strict';

angular.module('xtaSut', [
  'ngRoute',
  'xtaSut.list',
  'xtaSut.detail',
  'xtaSut.checkmark-filter',
  'xtaSut.phone-service'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/phones'});
  }]);
