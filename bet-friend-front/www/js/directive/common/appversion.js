(function(angular, undefined) {

  'use strict';


  angular.module('directives').directive('appVersion', appVersion);

  appVersion.$inject = [];

  /* @ngInject */
  function appVersion() {

    return function(scope, elm) {
      if (window.cordova) {
        window.cordova.getAppVersion(function(version) {
          elm.text(version);
        });
      } else {
        elm.text("browser.version-1.0.0");
      }
    };
  }

})(angular);
