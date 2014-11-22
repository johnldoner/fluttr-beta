
var app = angular.module("fluttrApp", ["firebase"]);

app.controller("fluttrCtrl", function($scope, $firebase) {
	var url = "https://crowdfluttr.firebaseio.com/";
	var ref = new Firebase(url);
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
