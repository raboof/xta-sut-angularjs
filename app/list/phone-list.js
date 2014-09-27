'use strict';

angular.module('xtaSut.list', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/phones', {
      controller: 'PhoneListCtrl',
      controllerAs: 'phoneListCtrl',
      templateUrl: 'list/phone-list.html'
    });
  }])

  .controller('PhoneListCtrl', function (Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  });
