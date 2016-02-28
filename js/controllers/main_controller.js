app.controller('MainController', ['$scope', 'MyMovies', function($scope, MyMovies) {
  $scope.MyMovies = MyMovies;
  $scope.title = "Angular OMDb API Search"
  $scope.movies = [];
}])
