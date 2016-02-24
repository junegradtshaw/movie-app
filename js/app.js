var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/:movieId/show', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })
    .otherwise('/'), {
    };

});
