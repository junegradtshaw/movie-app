app.controller('ShowController', ['$scope', '$routeParams', 'MyMovie', function($scope, $routeParams, MyMovie) {

  $scope.movieID = $routeParams.movieID;
  $scope.movie;

  // $scope.movie=
  MyMovie.getter($scope.movieID).then(function(data) {
    $scope.movie = data.data;
  })
}])
