app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.title = "Angular OMDb API Search"
  $scope.searchTitle="";

  $scope.searchMovie = function(movie) {
    console.log(movie);
    console.log('movie title: ',movie.title);
    $http.get('http://www.omdbapi.com/?s='+movie.searchTitle).then(function(data){
      console.log('movie data: ', data);
    })
  }
  // $http.get('https://api.github.com/zen').then(function(data){
  //   $scope.zenData = data.data;
  // });
  // $http.get('itunes.json').success(function(data) {
  //   $scope.itunesData = data.results;
  //   console.log('itunes data : ', $scope.itunesData);
  // })


}])
