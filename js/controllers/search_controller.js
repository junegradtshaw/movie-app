app.controller('SearchController', ['$scope', '$routeParams', 'MyMovies', function($scope, $routeParams, MyMovies) {
  $scope.movieTitle = $routeParams.movieTitle;
  $scope.movies;

 MyMovies.getter($scope.movieTitle).then(function(data) {
    $scope.movies=data.data.Search;
  });
}])
