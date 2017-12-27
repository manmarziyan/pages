

angular.module('myApp', ['ngMaterial', 'ngRoute'])
  .config(function ($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'index.html',
                controller  : 'appCtrl'
            })

            // route for the about page
            .when('/mirror', {
                templateUrl : 'mirror.html',
                controller  : 'appCtrl'
            })

    });
