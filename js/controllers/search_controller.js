app.controller('SearchController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.movieTitle = $routeParams.movieTitle;

  $scope.movies;

  $http.get('http://www.omdbapi.com/?s='+$scope.movieTitle).then(function(data){
    $scope.movies = data.data.Search;
  })
}])
