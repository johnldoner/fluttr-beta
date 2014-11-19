app.controller("swipeCtrl", function($scope, $firebase) {




var ref = new Firebase("https://crowdfluttr.firebaseio.com/ideas");
var sync = $firebase(ref)
$scope.data = sync.$asArray();


  function checkLogin() {
    var ref = new Firebase("https://crowdfluttr.firebaseio.com");
    ref.onAuth(function(authData) {
      if (authData) {
        alert(authData.uid)
        // user authenticated with Firebase
        console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
        //window.location.href = "https://crowdfluttr.firebaseapp.com/" + "main.html";
      }
    });
  }


    $scope.LikeItem = function (id) {
        var ref = new Firebase("https://crowdfluttr.firebaseio.com");
        var authData = ref.getAuth();
        alert("starting");
        checkLogin();
        if (authData) {
          // user authenticated with Firebase
          alert(authData.uid)
          console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
        } else {
          alert('not logged in')
          // user is logged out
        }
        $scope.data[id].Like = true;
        $scope.data[id].Seen = true;
        $scope.data.$save(id);
};
    $scope.DislikeItem = function (id) {
        $scope.data[id].Like = 'False';
        $scope.data[id].Seen = 'True';
        $scope.data.$save(id);
};


    $scope.addComment = function(s,id){
      var commentUrl = new Firebase("https://crowdfluttr.firebaseio.com/comments/" + id);
      var commentData = $firebase(commentUrl);
      $scope.comments = commentData.$asArray();
      $scope.comments.$add({
        comment: s,
        timestamp: Date.now()
      });
      //$scope.comments.push($scope.enterCommend);
      $scope.enterComment = " ";
    };

    $scope.removeComment = function (comment) {
      var commentUrl = new Firebase("https://crowdfluttr.firebaseio.com/comments/");
      var commentData = $firebase(commentUrl);
      $scope.comments = commentData.$asArray();
      var i = $scope.comments.indexOf(comment);
      $scope.comments.splice(i,1);
    };



});
