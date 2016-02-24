var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/show', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      .otherwise('/');
});
