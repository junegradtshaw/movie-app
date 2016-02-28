app.factory('MyMovie', ['$http', function($http) {
  return {
    getter: function(movieID) {
      return $http.get('http://www.omdbapi.com/?i='+movieID)
    }
  }
}])
