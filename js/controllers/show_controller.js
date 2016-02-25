app.controller('ShowController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

  $scope.movieID = $routeParams.movieID;
  $scope.movie;
  console.log("you've reached the show controller with movie: ", $scope.movieID);

  $http.get('http://www.omdbapi.com/?i='+$scope.movieID).then(function(data){
    $scope.movie = data.data;
    console.log('movie: ', $scope.movie);
  })
}])
