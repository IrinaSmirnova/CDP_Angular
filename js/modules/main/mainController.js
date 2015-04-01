(function () {
    'use strict';

    angular.module('foursquareApp')
        .controller('MainCtrl', function ($scope, foursquareApiService) {
            //$scope.place = '';


            $scope.search = function () {
                $scope.places = foursquareApiService.places({
                    near: $scope.place,
                    query: $scope.category
                });

            };
        });
})();
