(function(angular) {
  'use strict';
  angular.module('directives').directive('application', application);

  application.$inject = [];

  /* @ngInject */
  function application() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app.html',
      controller: ApplicationController,
      controllerAs: 'appvm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  /**
   * IoC
   */
  ApplicationController.$inject = [];

  /* @ngInject */
  function ApplicationController() {

    // Initialisation de la vue-modèle
    var vm = this;

  }
})(angular);
