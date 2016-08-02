(function() {

  'use strict';

  angular.module('directives').directive('toast', toast);

  toast.$inject = [];

  /* @ngInject */
  function toast() {

    var directive = {
      restrict: 'E',
      controller: ToastController,
      controllerAs: 'toastVm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  ToastController.$inject = ['$scope', 'ionicToast', '_TOAST_APPLICATION_'];

  /* @ngInject */
  function ToastController($scope, $ionicToast, _TOAST_APPLICATION_) {
    var vm = this;

    activate();

    function activate() {
      // Si l'évènement _TOAST_APPLICATION_
      $scope.$on(_TOAST_APPLICATION_, function(event, args) {

        $ionicToast.show(args.body, args.position, args.stick, 3000);

      });
    }
  }


})();
