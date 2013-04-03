'use strict';

angular.module('jahjahjitsu.comApp')
  .run(function ($rootScope) {
    $rootScope.on = function (what) {
      $('.' + what + ' img').fadeIn('fast');
    };
    $rootScope.out = function (what) {
      $('.' + what + ' img').fadeOut('fast');
    };
  });