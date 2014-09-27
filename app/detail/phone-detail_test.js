'use strict';

describe('PhoneDetail controller', function () {

  var scope,
    $httpBackend,
    PhoneDetailCtrl;

  var xyzPhoneData = function () {
    return {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    }
  };

  beforeEach(module('xtaSut.detail'));
  beforeEach(module('xtaSut.phone-service'));

  beforeEach(function () {
    this.addMatchers({
      toEqualData: function (expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(function () {
    this.addMatchers({
      toEqualData: function (expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/app-phonedata/phones/xyz.json').respond(xyzPhoneData());

    $routeParams.phoneId = 'xyz';
    scope = $rootScope.$new();
    PhoneDetailCtrl = $controller('PhoneDetailCtrl', {$scope: scope});
  }));


  it('should fetch phone detail', function () {
    expect(PhoneDetailCtrl.phone).toEqualData({});
    $httpBackend.flush();
    expect(PhoneDetailCtrl.phone).toEqualData(xyzPhoneData());
  });
});
