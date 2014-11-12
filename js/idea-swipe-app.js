app.controller("swipeCtrl", function($scope, $firebase) {




var ref = new Firebase("https://crowdfluttr.firebaseio.com/ideas");
var sync = $firebase(ref)
$scope.data = sync.$asArray();

    $scope.LikeItem = function (id) {
        $scope.data[id].Like = 'True';
        $scope.data[id].Seen = 'True';
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
