

angular.module('myApp', ['ngMaterial', 'ngRoute', 'ngAnimate'])
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

            .when('/ditti', {
                templateUrl : 'ditti/ditti.html',
                controller  : 'appCtrl'
            })

            .when('/spotify', {
                templateUrl : 'spotify/spotify.html',
                controller  : 'appCtrl'
            })

            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'appCtrl'
            })

            .when('/resume', {
                templateUrl : 'sangeetha_gomatam_resume.pdf',
                controller  : 'appCtrl'
            })

            .when('/contact', {
                templateUrl : 'underconstruction.html',
                controller  : 'appCtrl'
            })

    });
