'use strict';
var Foursquare_Page = function () {
    global.isAngularSite(true);
    browser.get('http://localhost:63342/CDP_Angular/index.html');
};

Foursquare_Page.prototype = Object.create ({}, {
    place: {
        get: function () {
            return element(by.css('.place'));
        }
    },
    category: {
        get: function () {
            return element(by.css('.category'));
        }
    },
    results: {
        get: function () {
            return element.all(by.css('.anim'));
        }
    },
    search: {
        get: function () {
            return element(by.css('.search'));
        }
    }

});

module.exports = Foursquare_Page;
