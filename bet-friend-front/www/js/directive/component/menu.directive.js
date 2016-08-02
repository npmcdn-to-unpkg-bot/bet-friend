(function(angular) {
  'use strict';
  angular.module('directives').directive('menu', menu);

  menu.$inject = [];

  /* @ngInject */
  function menu() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/menu.html',
      controller: MenuController,
      controllerAs: 'menuvm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  /**
   * IoC
   */
  MenuController.$inject = ['$scope', '$rootScope', '$state', '$translate', 'AjaxManagerFactory', 'RoundFactory', '_NOTIFY_APPLICATION_'];

  /* @ngInject */
  function MenuController($scope, $rootScope, $state, $translate, AjaxManagerFactory, RoundFactory, _NOTIFY_APPLICATION_) {

    // Initialisation de la vue-modèle
    var vm = this;

    vm.menu = [{
      name: "MENU.ITEM.NEWROUND",
      callback: newround,
      params: ["app.round"]
    }, {
      name: "MENU.ITEM.DISCONNECT",
      callback: logout,
      params: []
    }];

    function newround() {
      $rootScope.$broadcast(_NOTIFY_APPLICATION_, {
        'type': 'confirm',
        'title': $translate.instant('MENU.ITEM.NEWROUND'),
        'body': [$translate.instant('MENU.MODAL.NEWROUND')],
        okFn: function() {
          RoundFactory.startRound();
          $state.reload();
        }
      });
    }

    /**
     * Fonction de déconnexion de l'application.
     */
    function navigation(params) {
      $state.go(params[0]);
    }

    /**
     * Fonction de déconnexion de l'application.
     */
    function logout(params) {
      // A la déconnexion, vider l'utlisateur
      //vm.currentUser = null;
      $state.go("login");
      //AjaxManagerFactory.postJson('Api/Auth/Logout', {}, {}).then(function(response) {
      //  $state.go("login");
      //});

    }

  }
})(angular);
