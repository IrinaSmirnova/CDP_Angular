(function () {
    'use strict';

    angular.module('foursquareApp').directive('places', function() {
        return {
            restrict: 'E',

            templateUrl: 'js/common/directives/places/places.tpl.html',
            link: function(scope, element, attrs) {
                scope.filterQuery = '';
                scope.filterPlaces = function(item) {
                    return item.name.toLocaleLowerCase().indexOf(scope.filterQuery.toLowerCase())>= 0;
                };
                scope.showPlace = function(index) {
                    scope.selectedPlace = scope.places[index];
                };

            }
        }
    })
})();
