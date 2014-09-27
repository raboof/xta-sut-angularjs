'use strict';

angular.module('xtaSut.detail', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/phones/:phoneId', {
      controller: 'PhoneDetailCtrl',
      controllerAs: 'phoneDetailCtrl',
      templateUrl: 'detail/phone-detail.html'
    });
  }])

  .controller('PhoneDetailCtrl', function ($routeParams, Phone) {
    var self = this;
    self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
      self.mainImageUrl = phone.images[0];
    });

    self.setImage = function (imageUrl) {
      self.mainImageUrl = imageUrl;
    }
  });
