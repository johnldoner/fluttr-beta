
var app = angular.module("fluttrApp", ["firebase"]);

app.controller("swipeCtrl", function($scope, $firebase) {
	var url = "https://crowdfluttr.firebaseio.com/";
	var ref = new Firebase(url);
	
/*
 * Get user id
 * Liking function
 * Disliking function
 * Add comment function
 * Remove comment function
 */

	$scope.LikeItem = function(id) {
		var idea_path = ref.child("ideas").child(id);
		var likes = idea_path.child("likes");
		likes.transaction(function(like_num){
			if(like_num == null) {
				return 1;
			}
			else {
				return like_num + 1;
			}
		}, function(error, committed, snapshot) {
			if(error) {
				console.log("Transaction failed abnormally");
			}
			else if (!committed) {
				console.log("We aborted the transaction. Sorry!");
			}
			else {
				console.log("The idea was liked!");
			}
		});
	}; 
});
