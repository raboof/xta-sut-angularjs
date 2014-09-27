'use strict';

describe('filter', function () {

  beforeEach(module('xtaSut.checkmark-filter'));

  describe('xtaCheckmark', function () {
    it('should convert boolean values to unicode checkmark or cross', inject(function (xtaCheckmarkFilter) {
      expect(xtaCheckmarkFilter(true)).toBe('\u2713');
      expect(xtaCheckmarkFilter(false)).toBe('\u2718');
    }));
  });
});
