'use strict';

describe('Phone service (resource)', function () {

  // load modules
  beforeEach(module('xtaSut.phone-service'));

  // Test service availability
  it('check the existence of Phone factory', inject(function (Phone) {
    expect(Phone).toBeDefined();
  }));
});
