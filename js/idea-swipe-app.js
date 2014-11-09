app.controller("swipeCtrl", function($scope, $firebase) {




var ref = new Firebase("https://crowdfluttr.firebaseio.com/ideas");
var sync = $firebase(ref)
$scope.data = sync.$asArray();




});
