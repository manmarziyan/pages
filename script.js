

/*angular.module('myApp', ['ngMaterial', 'ngMessages'])
  .controller('appCtrl', function($scope, $location, $anchorScroll) {

   $scope.hello = "hello";

   $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }

})*/

var myApp = angular.module('myApp', ['ui.router', 'ngMaterial']);

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


});

myApp.run(function($rootScope, $state, $stateParams, $transitions){
  $transitions.onSuccess({}, function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})

myApp.controller('appCtrl', function($scope, $location, $anchorScroll) {

 $scope.hello = "hello";

 $scope.scrollTo = function(id) {
   $location.hash(id);
   $anchorScroll();
 }

})

