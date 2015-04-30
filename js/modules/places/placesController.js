(function () {
    'use strict';

    angular.module('foursquareApp')
        .controller('PlacesCtrl', function ($scope, foursquareApiService) {

            $scope.search = function () {
                $scope.places = foursquareApiService.places({
                    near: $scope.place,
                    query: $scope.category
                });

            };

        });
})();

