(function(angular, cordova, undefined) {
  'use strict';

  angular.module('directives').directive('login', login);

  login.$inject = [];

  /* @ngInject */
  function login() {

    var directive = {
      restrict: 'E',
      templateUrl: 'login/main.html',
      controller: LoginController,
      controllerAs: 'loginvm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  /**
   * IoC
   */
  LoginController.$inject = ['$scope', '$ionicPlatform', '$cordovaSplashscreen', '$state', 'LoginFactory'];

  /* @ngInject */
  function LoginController($scope, $ionicPlatform, $cordovaSplashscreen, $state, LoginFactory) {

    var vm = this;
    vm.login = _login;

    $ionicPlatform.ready(function() {
      _activate();
    });

    // Private functions
    function _activate() {
      vm.username = "";
      vm.password = "";

      if (cordova) {
        $cordovaSplashscreen.hide();
      }
    }

    function _login() {

      // TODO A supprimer et décommenter
      $state.go("app.round");

      //LoginFactory.authentication({
      //  username: vm.username,
      //  password: vm.password
      //}).then(_isAuthenticatedSuccess);

    }

    function _isAuthenticatedSuccess(response) {
      $state.go("app.round");
    }

  }
})(angular, window.cordova);
