app.controller('SearchController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.movieTitle = $routeParams.movieTitle;
  console.log('routeParams: ', $routeParams);
  console.log("you've reached the search controller with movie: ", $scope.movieTitle);

  $scope.movies;
  //
  // $scope.searchMovie = function() {
  $http.get('http://www.omdbapi.com/?s='+$scope.movieTitle).then(function(data){
    $scope.movies = data.data.Search;
    // console.log($scope.movies);
    // return;
  })
}])


// .controller('MyCtrl1', ['$scope','$routeParams', function($scope, $routeParams) {
//   var param1 = $routeParams.param1;
//   var param1 = $routeParams.param2;
//   ...
// }]);
