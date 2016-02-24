app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
  });
  // $http.get('https://itunes.apple.com/search?term=jack+johnson').then(function(data){
  //   $scope.itunesData = data.data.results;
  //   console.log('itunes data: ', $scope.itunesData);
  // })
  $http.get('itunes.json').success(function(data) {
    $scope.itunesData = data.results;
    console.log('itunes data : ', $scope.itunesData);
  })


}])
