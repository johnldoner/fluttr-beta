
var app = angular.module("fluttrApp", ["firebase"]);

app.controller("fluttrCtrl", function($scope, $firebase) {
	var url = "https://crowdfluttr.firebaseio.com/";
	var ref = new Firebase(url);
	
	// Login using Facebook
  	$scope.loginFacebook = function() {
	    console.log("Got into facebook login");
	    ref.authWithOAuthPopup("facebook", function(error, authData) { 
	    	$scope.loggedIn = true;
	    	$scope.uniqueid = authData.facebook.displayName;
	    	 }, {
		  remember: "sessionOnly",
		  scope: "email"
		});

		checkLogin();
	};

  	// Login using Google
  	$scope.loginGoogle = function() {
	    console.log("Got into google login");
	    ref.authWithOAuthPopup("google", function(error, authData) { 
	    	$scope.loggedIn = true;
	    	$scope.uniqueid = authData.google.displayName;
	    	    	 }, {
		  remember: "sessionOnly",
		  scope: "email"
		});

		checkLogin();
	};

	function checkLogin() {
		ref.onAuth(function(authData) {
		  if (authData) {
		    // user authenticated with Firebase
		    console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
		    window.location.href = "https://crowdfluttr.firebaseapp.com/" + "main.html";
		  }
		});
	}

	$scope.passwordLogin = function() {
		ref.authWithPassword({
		  email    : mail,
		  password : pass
		}, function(error, authData) {
		  if (error === null) {
		    // user authenticated with Firebase
		    console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
		  } else {
		    console.log("Error authenticating user:", error);
		  }
		});

		checkLogin();
	};
	

	 $scope.logout = function() {
		ref.unauth();
		$scope.loggedIn = false;
	  };

		

		$scope.addIdea = function(title, id, displayName) {
			$scope.displayName = authData.displayName;
			$scope.uid = authData.uid;

				$scope.ideas.$add(
					{
						"title": title, 
						"user": authData.uid,
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
