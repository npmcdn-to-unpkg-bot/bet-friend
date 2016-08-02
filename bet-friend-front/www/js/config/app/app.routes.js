(function(angular, undefined) {
  'use strict';

  angular.module('starter')
    .config(stateConfig);

  stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
  function stateConfig($stateProvider, $urlRouterProvider, $stateParams) {

    $stateProvider
    // Login
      .state('login', {
        url: '/login',
        template: '<login></login>',
        authenticate: false
      })
      .state('app', {
        abstract: true,
        url: '/app',
        template: '<menu></menu>'
      })
      // Tournée
      .state('app.round', {
        url: '/round',
        views: {
          'menuContent': {
            template: '<ion-view view-title="{{ \'ROUND.TITLE\' | translate }}"><round></round></ion-view>'
          },
        },
        authenticate: true
      })
      // Détail site
      .state('app.site', {
        url: '/round/:idx',
        views: {
          'menuContent': {
            template: '<ion-view view-title="{{ \'SITE.TITLE\' | translate }}"><site></site></ion-view>'
          }
        },
        authenticate: true
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  }

})(angular);
