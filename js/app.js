var app = angular.module("myApp", ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider

    .when('/:movieTitle/search', {
      templateUrl: 'partials/search.html',
      controller: 'SearchController'
    })

    .when('/:movieID/show', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })

    .otherwise('/'), {
    };

});
