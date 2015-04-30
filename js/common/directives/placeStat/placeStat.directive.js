(function () {
    'use strict';

    angular.module('foursquareApp').directive('placeStat', function() {
        return {
            restrict: 'E',
            //require: '^placeCard',
            scope: true,
            templateUrl: 'js/common/directives/placeStat/placeStat.tpl.html',
            link: function(scope, element, attrs) {

            }
        }
    })
})();

