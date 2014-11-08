
var app = angular.module("fluttrApp", ["firebase"]);

app.controller("fluttrCtrl", function($scope, $firebase) {

	var ref = new Firebase("https://crowdfluttr.firebaseio.com/users");
	
	// Login using Facebook
  	$scope.loginFacebook = function() {
	    console.log("Got into facebook login");
	    ref.authWithOAuthPopup("facebook", function(error, authData) { 
	    	$scope.loggedIn = true;
	    	$scope.uniqueid = authData.first_name;
	    	 }, {
		  remember: "sessionOnly",
		  scope: "email,first_name"
		});
	};

  	// Login using Google
  	$scope.loginGoogle = function() {
	    console.log("Got into google login");
	    ref.authWithOAuthPopup("google", function(error, authData) { 
	    	$scope.loggedIn = true;
	    	$scope.uniqueid = authData.uid;
	    	    	 }, {
		  remember: "sessionOnly",
		  scope: "email"
		});
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
