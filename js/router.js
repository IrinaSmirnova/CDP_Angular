angular.module('foursquareApp')
    .config (function ($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MainCtrl',
                templateUrl: 'js/modules/main/main.tpl.html',
                authenticate: true
            })
            .state('login', {
                url: 'login',
                controller: 'LoginCtrl',
                templateUrl: 'js/modules/login/login.tpl.html'

            })
            .state('profile', {
                url: 'profile',
                parent: 'home',
                controller: 'ProfileCtrl',
                templateUrl: 'js/modules/profile/profile.tpl.html',
                authenticate: true
            })
            .state('places', {
                url: 'places',
                parent: 'home',
                controller: 'PlacesCtrl',
                templateUrl: 'js/modules/places/places.tpl.html',
                authenticate: true
            })
    })
    .config (function ($httpProvider) {

});
