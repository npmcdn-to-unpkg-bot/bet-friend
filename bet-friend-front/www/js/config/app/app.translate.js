(function(angular, undefined) {
  'use strict';

  angular.module('starter')
    .config(translateConfig);

  translateConfig.$inject = ['$translateProvider'];

    /* @ngInject */
  function translateConfig($translateProvider) {
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'assets/locales/',
        suffix: '.json'
      })
      .registerAvailableLanguageKeys(['fr'], {
        'fr': 'fr',
        'fr_*': 'fr',
        'FR_*': 'fr',
        'Fr_*': 'fr',
      })
      .determinePreferredLanguage()
      .fallbackLanguage('fr')
      .useSanitizeValueStrategy('escapeParameters');
  }


})(angular);
