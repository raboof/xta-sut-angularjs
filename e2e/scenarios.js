'use strict';

describe('XTA SUT App', function () {

  it('should redirect index.html to index.html#/phones', function () {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function (url) {
      expect(url.split('#')[1]).toBe('/phones');
    });
  });


  describe('Phone list view', function () {
    beforeEach(function () {
      browser.get('app/index.html#/phones');
    });


    it('should filter the phone list as a user types into the search box', function () {
      var phoneList = element.all(by.repeater('phone in phoneListCtrl.phones'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
    });
  });


  describe('Phone detail view', function () {
    beforeEach(function () {
      browser.get('app/index.html#/phones/nexus-s');
    });


    it('should display nexus-s page', function () {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });


    it('should display the first phone image as the main phone image', function () {
      expect(element(by.id('main-mage')).getAttribute('src')).toMatch(/app-phonedata\/img\/phones\/nexus-s.0.jpg/);
    });
  });
});
