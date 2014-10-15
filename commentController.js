var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebase) {
	var ref = new Firebase("https://resplendent-fire-1812.firebaseio.com/");
	var user;
	var auth = new FirebaseSimpleLogin(ref.child("ideas"), function(error, user) {
		if (error) {
			console.log("User could not be logged in. Error code: " + error.code);

			switch(error.code) {
				case "INVALID_EMAIL":
					alert("Sorry, we don't recognize your email address");
					break;
				case "INVALID_PASSWORD":
					alert("Sorry, either your email or your password were wrong");
					break;
				default:
					alert("Sorry, something went wrong!");
					break;
			}
		}
		else if (user) {
			console.log(user.accessToken);
			console.log(user.displayName);
			$scope.displayName = user.displayName;
			user = user.id;
		}
	});
		
	$scope.login = function() {
		auth.login('facebook');	
	}
	$scope.logout = function() {
		auth.logout();	
	}

	/*
	 * Initializes the comments trunk under the root
	*/

	ref.push("comments", function(error) {
		if(error) { 
			console.log("Comments trunk could not be added: " + error.code);
		}
		else {
			console.log("Comments trunk successfully added");
		}
	});
	var comments = ref.child("comments");

	/*
	 * Code for the controller (to be written into html tag)
	*/
	function commentController($scope) {
		$scope.idea = null;
		$scope.commentShow = false;
		$scope.showComment() = function(idea) {
			$scope.idea = idea;
			$scope.commentShow = !$scope.commentShow;
		}
		$scope.post() = function(text, idea) {
			var commentPath = $scope.idea.comments;
			var thread = comments.child(commentPath);
			// Pushes a comment to the list of commments that exist for a given idea
			var new_comment = { "user": user, "likes": 0, "text": text, "timestamp": Firebase.ServerValue.TIMESTAMP, "idea": idea };
			thread.transaction(function(list) {
				return list.push(new_comment);
			}, function(error, committed, snapshot) {
				if(error) {
					console.log("New comment could not be added");
				}
				else {
					concole.log("Comment added successfully")
				}
			});
		}
		$scope.upvote() = function(idea, upvote) {
			var likes_path = ref.child("ideas").child(idea).child("likes");
			likes_path.transaction(function(likes) {
				if(upvote) { return likes + 1; }
				else { return likes - 1; }
			});
		}
		$scope.like_comment() = function(idea, comment) {
			if(user == idea.user) {
				var author = comment.user;
				var author_path = ref.child("users").child(author);
				author_path.child("karma").transaction(function(karma) {
					return karma + 1;
				});
			}
		}
	}

});

