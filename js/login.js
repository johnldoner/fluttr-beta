var app = angular.module("fluttrApp", ["firebase"]);
// let's create a re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://crowdfluttr.firebaseio.com/");
  return $firebaseAuth(ref);
}]);
// and use it in our controller
app.controller("fluttrCtrl", ["$scope", "Auth", function($scope, Auth) {
  $scope.auth = Auth;
  $scope.user = $scope.auth.$getAuth();
}])