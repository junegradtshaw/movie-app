app.controller('ShowController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

  // $scope.movieID = $routeParams.movieID;
  $scope.movie;

  $http.get('http://www.omdbapi.com/?i='+$routeParams.movieID).then(function(data){
    $scope.movie = data.data;
  })
}])
