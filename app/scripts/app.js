'use strict';

angular.module('jahjahjitsu.comApp', [])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.hashPrefix('#');
    $locationProvider.html5Mode(true); //now there won't be a hashbang within URLs for browers that support HTML5 history
  }]);
