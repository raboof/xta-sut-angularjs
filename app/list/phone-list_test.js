'use strict';

describe('PhoneList controller', function () {

  var scope,
    $httpBackend,
    PhoneListCtrl;

  beforeEach(module('xtaSut.list'));
  beforeEach(module('xtaSut.phone-service'));

  beforeEach(function () {
    this.addMatchers({
      toEqualData: function (expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/app-phonedata/phones/phones.json').respond([
      {name: 'Nexus S'},
      {name: 'Motorola DROID'}
    ]);

    scope = $rootScope.$new();
    PhoneListCtrl = $controller('PhoneListCtrl', {$scope: scope});
  }));

  it('should create "phones" model with 2 phones fetched from xhr', function () {
    expect(PhoneListCtrl.phones).toEqualData([]);
    $httpBackend.flush();

    expect(PhoneListCtrl.phones).toEqualData(
      [
        {name: 'Nexus S'},
        {name: 'Motorola DROID'}
      ]);
  });

  it('should set the default value of orderProp model', function () {
    expect(PhoneListCtrl.orderProp).toBe('age');
  });
});
