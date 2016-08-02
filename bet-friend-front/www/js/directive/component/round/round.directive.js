(function(angular, cordova, undefined) {
  'use strict';
  angular.module('directives').directive('round', round);

  round.$inject = [];

  /* @ngInject */
  function round() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/round/main.html',
      controller: RoundController,
      controllerAs: 'roundvm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  /**
   * Injection de dépendances.
   */
  RoundController.$inject = ['$ionicPlatform', '$window', '$location', '$translate', 'RoundFactory'];

  /* @ngInject */
  function RoundController($ionicPlatform, $window, $location, $translate, RoundFactory) {

    var vm = this;
    vm.open = _open;
    vm.call = _call;
    vm.validate = _validate;

    $ionicPlatform.ready(function() {
      _activate();
    });

    // Private functions
    function _activate() {

      vm.round = RoundFactory.getRound();

      _changeRoundValidationState();
    }

    function _open(pos) {
      $location.path("app/round/" + pos);
    }

    function _call(phonenumber) {
      $window.location.href = "tel:" + phonenumber;
    }

    function _validate() {
      vm.round = RoundFactory.toggleStateRound();
      _changeRoundValidationState();
    }

    function _changeRoundValidationState() {
      if (vm.round.round_valid) {
        vm.validation = {
          change: {
            class: "bar-assertive",
            value: $translate.instant('ROUND.VALIDATION.INVALIDATE')
          }
        };
      } else {
        vm.validation = {
          change: {
            class: "bar-balanced",
            value: $translate.instant('ROUND.VALIDATION.VALIDATE')
          }
        };
      }
    }

  }
})(angular, window.cordova);
