
var app = angular.module("fluttrApp", ["firebase"]);



app.controller("fluttrCtrl", function($scope, $firebase) {



var ref = new Firebase("https://crowdfluttr.firebaseio.com/ideas");



		  var auth = new FirebaseSimpleLogin(ref, function(error, user) {
		  	if (!user) {
				auth.login('google', {
				  rememberMe: true
				});
		  	}
		  	else {
		  		console.log(user.displayName);
		  		console.log(user.uid)

		  		$scope.displayName = user.displayName;
		  		$scope.uid = user.uid;

		  		$scope.showForm = true;
		  		$scope.hideForm = false;

				$scope.addIdea = function(title, id, displayName) {

				$scope.displayName = user.displayName;
				$scope.uid = user.uid;

					$scope.ideas.$add(
						{
							"title": title, 
							"user": user.uid,
							"timestamp": Date.now();
						}
						);
					//The user id needs to be pulled and we need to post
					//the idea id generated here to the user branch
					$scope.title = '';
					$scope.showForm = false;
					$scope.hideForm = true;
				}
		  	}
						  			  	
			});

var sync = $firebase(ref);


$scope.ideas = sync.$asArray();


});
