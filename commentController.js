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
		  $scope.comments = 0;
		  $scope.commentShow = false;
		  $scope.addIdea = function(title, desc, id, displayName) {
		    $scope.ideas.$add({title: title, desc: desc, comments: comments});
		  }
		  $scope.showComment = function() {
		  	$scope.commentShow = !$scope.commentShow;
		  };

		});
    </script>

<body>
	<ul class="list-group">
	  <li class="list-group-item" ng-repeat="idea in ideas">
	  	<span class="badge" ng-click="showComment()">{{ idea.comments }}</span>
	    <h4 class="list-group-item-heading">{{ idea.title }}</h4>
    	<p class="list-group-item-text">{{ idea.desc }}</p>
    	<ul class="list-group" ng-hide="commentShow"
	  </li>
	</ul>
</body>
