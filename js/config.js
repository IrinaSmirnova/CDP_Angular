(function () {
    'use strict';

    angular.module('foursquareApp')
        .constant('appConfig', {
           api: {
               baseURL: 'https://api.foursquare.com/v2',
               clientId: '4Q2HRAKLN0FN4CMSQJ3SUKDU0FJOW5V0V1HVS5RLUFEDRR5L',
               clientSecret: 'QF014UVXBFD5RNQ4OSDKREAP5RONUIYJTREBHKEJMTFLCSQ0',
               version: '20131230'
           }
        });
})();

