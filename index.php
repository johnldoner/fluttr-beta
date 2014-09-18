
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
		  $scope.addIdea = function(title, desc, id, displayName) {
		    $scope.ideas.$add({title: title, desc: desc});
		  }
		  
		});
		

    </script>
  </head>  <body ng-controller="SampleCtrl">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">CrowdFluttr</a>
        </div>
        <div class="navbar-collapse collapse">
          <form class="navbar-form navbar-right" role="form">
            <div class="form-group">
              <input type="text" placeholder="Email" class="form-control">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Sign in</button>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </div>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1>Welcome to Crowdfluttr.</h1>
        <p>Share an idea, get global feedback to make it better, and allow passionate people interested in bringing the idea to life help you make it happen.</p>
        <p><a class="btn btn-primary btn-lg" role="button">Learn more &raquo;</a></p>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-center">Random idea</h2>
          </div>
      </div>
      
          <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-12">
          <h2>Create your idea now:</h2>

{{ title }}
<br>
{{ desc }}

<form role="form" ng-submit="addIdea(title, desc)">
  <div class="form-group">
    <label for="idea-title">Title</label>
    <input type="text" class="form-control" ng-model="title" id="idea-title" placeholder="What's your idea called?">
  </div>
  <div class="form-group">
    <label for="desc">Description</label>
   <textarea name="desc" class="form-control" ng-model="desc" rows="15" placeholder="Describe your idea."></textarea>
  </div>
  <button type="submit" class="btn btn-primary btn-lg">Submit</button>
</form>
        </div>
      </div>
      

      <hr>

      <footer>
        <p>&copy; Company 2014</p>
      </footer>
    </div> <!-- /container -->

  </body>
</html>
