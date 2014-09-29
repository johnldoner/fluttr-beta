
var app = angular.module("fluttrApp", ["firebase"]);



app.controller("fluttrCtrl", function($scope, $firebase) {



var ref = new Firebase("https://resplendent-fire-1812.firebaseio.com/ideas");
var auth = new FirebaseSimpleLogin(ref, function(error, user) {
  if (user) {
    console.log(user.accessToken);
    console.log(user.displayName);
    $scope.displayName = user.displayName;
    $scope.id = user.id;
  }
});






$scope.login = function() {
	auth.login('facebook');	
}

$scope.logout = function() {
	auth.logout();	
}



var sync = $firebase(ref);


$scope.ideas = sync.$asArray();


$scope.title = "";


$scope.desc = "";


$scope.addIdea = function(title, desc, id, displayName) {
	$scope.ideas.$add(
		{
			title: title, 
			desc: desc
		}
		);
	$scope.title = '';
	$scope.desc = '';

}





});
