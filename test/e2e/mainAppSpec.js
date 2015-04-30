'use strict';

var Foursquare_Page = require('./Foursquare_Page.js');

describe('Main foursquare Spec', function() {
    var page;

    beforeEach(function () {
        page = new Foursquare_Page();
    });

    it ('should have a title', function() {
        expect(browser.getTitle()).toEqual('Angular "FoursquareApp"');
    });

    it('should render form with two input fields and search button', function() {
        expect(page.place).toBeDefined();
        expect(page.category).toBeDefined();
        expect(page.search).toBeDefined();
    });

    it('should render list of venues after search query', function() {
        page.place.sendKeys('kiev');
        page.category.sendKeys('kino');
        page.search.click();
        browser.wait(function() {
            return browser.driver.isElementPresent(by.css('.results'));
        }, 5000);

        expect(page.results.count()).toBeGreaterThan(1);

    });
});
