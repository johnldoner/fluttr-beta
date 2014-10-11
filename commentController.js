<html ng-app="sampleApp">
<head>
  <meta charset="utf-8">
  <title>CrowdFluttr</title>
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
  	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  	<script src="https://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
  	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.19/angular.min.js"></script>
    <script src="https://cdn.firebase.com/js/client/1.0.21/firebase.js"></script>
    <script src="https://cdn.firebase.com/libs/angularfire/0.8.2/angularfire.min.js"></script>
    <script src="https://cdn.firebase.com/js/simple-login/1.6.3/firebase-simple-login.js"></script>
    <script>
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
			Initializes the comments trunk under the root
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
				$scope.like_comment() = functino(idea, comment) {
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
    </script>
<!--
<body>
	<ul class="list-group" ng-controller="commentHandler">
	  <li class="list-group-item" ng-repeat="idea in ideas">
	  	<span class="badge" ng-click="showComment(idea)">{{ idea.comments }}</span>
	    <h4 class="list-group-item-heading">{{ idea.title }}</h4>
    	<p class="list-group-item-text">{{ idea.desc }}</p>
    	<ul class="list-group" ng-hide="commentShow">
    		<li class="list-group-item" ng-repeat="note in comments">
    			{{ note.text }}
    		</li>
    		<li>
    			<div class="input-group">
    				<input type="text" class="form-control" placeholder="Add comment here">
    				<span class="input-group-btn">
        				<button class="btn btn-default" type="button" ng-click="post()">Post!</button>
      				</span>
    			</div>
    		</li>
    	</ul>
	  </li>
	</ul>
</body>
-->

