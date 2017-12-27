

angular.module('myApp', ['ngMaterial', 'ngMessages'])
  .controller('appCtrl', function($scope, $location, $anchorScroll) {

   $scope.hello = "hello";

   $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }

})
