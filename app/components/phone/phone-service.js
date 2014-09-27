'use strict';

angular.module('xtaSut.phone-service', ['ngResource'])
  .factory('Phone', function ($resource) {
    return $resource('/app-phonedata/phones/:phoneId.json', {}, {
      query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
    });
  });
