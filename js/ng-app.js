
var app = angular.module("fluttrApp", ["firebase"]);

	// a factory to create a re-usable Profile object
// we pass in a username and get back their synchronized data as an object
app.factory("Profile", ["$firebase", function($firebase) {
  return function(username) {
    // create a reference to the user's profile
    var ref = new Firebase("https://crowdfluttr.firebaseio.com/users/").child(username);
    // return it as a synchronized object
    return $firebase(ref).$asObject();
  }
}]);
app.controller("ProfileCtrl", ["$scope", "Profile",
  function($scope, Profile) {
    // create a 3-way binding to our Profile as $scope.profile
//    Profile("physicsmarie").$bindTo($scope, "profile");
 Profile("hello").$bindTo($scope, "profile");
  }
]);

app.controller("fluttrCtrl", function($scope, $firebase) {

	var ref = new Firebase("https://crowdfluttr.firebaseio.com/ideas");
	var auth = new FirebaseSimpleLogin(ref, function(error, user) {
	  $scope.loginGoogle = function() {
		auth.login('google', {
		 // rememberMe: "sessiononly"
		 rememberMe: true
		});
		$scope.username = user.displayName;
		$scope.userid = user.id;
		$scope.gmail = user.email;
		$scope.uniqueid = user.uid;
		$scope.loggedIn = true;
	  };
	  $scope.loginFacebook = function() {
		auth.login('facebook', {
		 // rememberMe: "sessiononly"
		 rememberMe: true
		});
		$scope.username = user.displayName;
		$scope.userid = user.id;
		$scope.gmail = user.email;
		$scope.uniqueid = user.uid;
		$scope.loggedIn = true;

	  };
	  $scope.logout = function() {
		ref.unauth();
		$scope.loggedIn = false;
	  };
		$scope.addIdea = function(title, id, displayName) {

		$scope.displayName = user.displayName;
		$scope.uid = user.uid;

			$scope.ideas.$add(
				{
					"title": title, 
					"user": user.uid,
					"timestamp": Date.now()
				}
				);
			//The user id needs to be pulled and we need to post
			//the idea id generated here to the user branch
			$scope.title = '';
		};
		var sync = $firebase(ref);
		$scope.ideas = sync.$asArray();
	});
});
