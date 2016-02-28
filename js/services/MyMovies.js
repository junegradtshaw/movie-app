app.service('MyMovies', ['$http', function($http) {
  return {
    getter: function(movieTitle) {
      return $http.get('http://www.omdbapi.com/?s='+movieTitle)

    }
  }
}])
