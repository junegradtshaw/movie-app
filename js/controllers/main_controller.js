app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
  });
  // $http.get('https://itunes.apple.com/search?term=jack+johnson').then(function($itunesData){
  //   console.log('itunes data: ', itunesData.data);
}])
