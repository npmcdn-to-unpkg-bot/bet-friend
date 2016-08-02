// Initialisation des modules
(function(angular, undefined) {
  'use strict';

  angular.module('constants', []);
  angular.module('utils', []);
  angular.module('services', ['constants', 'utils']);
  angular.module('directives', ['constants', 'services', 'utils']);
  angular.module('starter', ['ionic', 'ngCordova', 'pascalprecht.translate', 'ionic-toast', 'directives', 'templates'])
    .run(runApplication);

  runApplication.$inject = ['$ionicPlatform', '$cordovaSplashscreen', '$ionicHistory', '$location'];

  /* @ngInject */
  function runApplication($ionicPlatform, $cordovaSplashscreen, $ionicHistory, $location) {
    $ionicPlatform.ready(function() {

      if (window.cordova) {
        $cordovaSplashscreen.show();
      }

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);

      }

      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }

      $ionicPlatform.registerBackButtonAction(function(event) {
        var path = $location.path();
        if (path === "/login" || path === "/app/round") {
          ionic.Platform.exitApp();
        } else {
          $ionicHistory.goBack();
        }
      }, 100);

    });
  }

})(angular);
