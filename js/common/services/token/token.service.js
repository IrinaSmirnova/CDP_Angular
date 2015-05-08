(function () {
    'use strict';

    var tokenService = function () {
       var token = null;

       return {
           $get: function($injector) {
               return {
                   request: function(config) {
                       if(token) {
                           config.headers['Authorization'] = 'Bearer' + token;
                       }
                       return config;
                   },
                   requestToken: function() {
                       return $injector
                           .get('$http')

                           .success(function(res) {
                               return token = "fdgdg";
                           });
                   }
               }
           }
       }
    };

    angular.module('foursquareApp').provider('tokenService', tokenService);


})();

