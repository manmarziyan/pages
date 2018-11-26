

/*angular.module('myApp', ['ngMaterial', 'ngMessages'])
  .controller('appCtrl', function($scope, $location, $anchorScroll) {

   $scope.hello = "hello";

   $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }

})*/

var myApp = angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMdIcons']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('/', {
            url: '/',
            templateUrl: 'coverPage.html'
        })
        .state('mirror', {
            url: '/mirror',
            templateUrl: 'mirror.html'
        })
        .state('ditti', {
            url: '/ditti',
            templateUrl: 'ditti/ditti.html'
        })
        .state('spotify', {
            url: '/spotify',
            templateUrl: 'spotify/spotify.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        })

        .state('resume', {
            url: '/resume',
            templateUrl: 'sangeetha_gomatam_resume.pdf'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'underconstruction.html'
        })


});

myApp.run(function($rootScope, $state, $stateParams, $transitions){
  $transitions.onSuccess({}, function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})

myApp.controller('appCtrl', function($scope, $location, $anchorScroll, $state,) {

 $scope.hello = "hello";
 $scope.state = $state.current;

 $scope.scrollTo = function(id) {
   $location.hash(id);
   $anchorScroll();
 }

})
