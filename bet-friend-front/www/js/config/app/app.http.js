(function(angular, undefined) {
  'use strict';

  angular.module('starter')
    .config(httpConfig);
  /**
   * Injection de dépendances pour la fonction httpConfig.
   */
  httpConfig.$inject = ['$httpProvider', '_START_REQUEST_', '_END_REQUEST_', '_TOAST_APPLICATION_', '_SERVER_'];

  /**
   *   Fonction de configuration des appels http. Intercepte le début et la fin des appels Ajax pour ajouter des header/cookie ou gérer les erreurs ($broadcast).
   *
   *   @param $httpProvider : Composant de gestion des appels http
   *   @param _START_REQUEST_ : Constante début de requête Ajax
   *   @param _END_REQUEST_ : Constante fin de requête Ajax
   *   @param _TOAST_APPLICATION_ : Constante erreur Ajax (hors 401,403 et 409)
   */
   /* @ngInject */
  function httpConfig($httpProvider, _START_REQUEST_, _END_REQUEST_, _TOAST_APPLICATION_, _SERVER_) {

    $httpProvider.defaults.timeout = 3000;

    //fancy random token, losely after https://gist.github.com/jed/982883
    function b(a) {
      /* jshint ignore:start */
      return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e16] + 1e16).replace(/[01]/g, b);
      /* jshint ignore:end */
    }

    // Protection Cross-Site Request Forgery
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
    $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.interceptors.push(['$q', '$injector', function($q, $injector) {
      var $rootScope, $http, $state, $translate;

      return {
        'request': function(config) {
          // Récupération du $rootScope par injection pour éviter les dépendances cycliques
          $rootScope = $rootScope || $injector.get('$rootScope');

          // Envoie de la notification
          $rootScope.$broadcast(_START_REQUEST_);

          var csrf = b();

          // Ajout du cookie CSRF
          // Si appel distant (pas en local) et cordova de présent
          if (config.url.indexOf(_SERVER_.url) === 0 && window.cordova) {
            window.cookieMaster.setCookieValue(_SERVER_.url, 'CSRF-TOKEN', csrf,
              function() {
                config.headers['X-CSRF-TOKEN'] = csrf;
                return config;
              },
              function(error) {
                console.log('Error setting cookie: ' + error);
                return config;
              });
          } else {
            document.cookie = 'CSRF-TOKEN=' + csrf;
            config.headers['X-CSRF-TOKEN'] = csrf;

            return config;
          }
        },

        'response': function(response) {
          // Récupération du $http par injection pour éviter les dépendances cycliques
          $http = $http || $injector.get('$http');

          // N'envoyer la notification que si c'est le dernière appel en cours
          if ($http.pendingRequests.length < 1) {
            // Récupération du $rootScope par injection pour éviter les dépendances cycliques
            $rootScope = $rootScope || $injector.get('$rootScope');

            // Envoie de la notification
            $rootScope.$broadcast(_END_REQUEST_);
          }

          return response;
        },

        'responseError': function(error) {
          // Récupération du $http par injection pour éviter les dépendances cycliques
          $http = $http || $injector.get('$http');

          // Récupération du $rootScope par injection pour éviter les dépendances cycliques
          $rootScope = $rootScope || $injector.get('$rootScope');

          // Récupération du $translate par injection pour éviter les dépendances cycliques
          $translate = $translate || $injector.get('$translate');

          // N'envoyer la notification que si c'est le dernière appel en cours
          if ($http.pendingRequests.length < 1) {
            // Envoie de la notification
            $rootScope.$broadcast(_END_REQUEST_);
          }

          // renseigner un message par défaut si non présent
          if (!angular.isObject(error.data) || !error.data.message) {
            error.data = {
              message: $translate.instant('ERROR.UNKNOWN')
            };
          }

          if (error.status === 401 || error.status === 403) {
            // Si erreur 401 ou 403, on redirige vers la page de login

            // Récupération du $state par injection pour éviter les dépendances cycliques
            $state = $state || $injector.get('$state');

            $state.go("login");
          } else if ((error.status !== 409 && error.status !== -1)) {
            // Si autre erreur (Autre que 401/403/409)
            var obj = [];
            obj.push(error.data.message);
            $rootScope.$broadcast(_TOAST_APPLICATION_, {
              'position': 'bottom',
              'stick': false,
              'body': obj
            });
          }

          return $q.reject(error);
        }
      };
    }]);
  }
})(angular);
