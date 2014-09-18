
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
  </head>  <body ng-controller="registerFunc">
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

    <div class="container">
      
      <a ng-click="login()">Login</a> | 
      <a ng-click="logout()">Logout</a>
      
      Welcome, {{displayName}}.
      
      <hr>
      
          <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h2>Thank you for your submission.</h2>
<p>Register now to edit your project, share it with the community, vote on other projects, recruit members, and request support. It takes just 30 seconds.</p>
<form class="form-horizontal" role="form" ng-submit="register(fname, lname, email, password, remember); verify(password, confirm);">
	<div class="form-group">
    <label for="fname" class="col-sm-4 control-label">First Name</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="fname" ng-model="fname" placeholder="First Name">
    </div>
  </div>
    <div class="form-group">
    <label for="lname" class="col-sm-4 control-label">Last Name</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="lname" ng-model="lname" placeholder="Last Name">
    </div>
  </div>
  <div class="form-group">
    <label for="email" class="col-sm-4 control-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="email" ng-model="email" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="password" class="col-sm-4 control-label">Password</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="password" ng-model="password" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="confirm-pass" class="col-sm-4 control-label">Confirm Password</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="confirm-password" ng-model="confirm" placeholder="Confirm Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-4 col-sm-6">
      <div class="checkbox">
        <label>
          <input type="checkbox" ng-model="remember"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-4 col-sm-6">
      <button type="submit" class="btn btn-primary btn-lg">Register</button>
    </div>
  </div>
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
