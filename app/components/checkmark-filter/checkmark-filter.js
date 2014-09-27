'use strict';

angular.module('xtaSut.checkmark-filter', [])
  .filter('xtaCheckmark', function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  });
