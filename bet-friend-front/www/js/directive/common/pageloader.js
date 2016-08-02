(function(angular, undefined) {
  'use strict';
  angular.module('directives').directive('pageLoader', pageLoader);

  pageLoader.$inject = [];

  /* @ngInject */
  function pageLoader() {

    var directive = {
      restrict: 'E',
      controller: PageLoaderController,
      controllerAs: 'pageLoaderVm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  /**
   * Injection de dépendances.
   */
  PageLoaderController.$inject = ['$scope', '$ionicLoading', '$timeout', '_START_REQUEST_', '_END_REQUEST_'];

  /* @ngInject */
  function PageLoaderController($scope, $ionicLoading, $timeout, _START_REQUEST_, _END_REQUEST_) {

    var vm = this;
    var _template = '<div id="loading-spinner"><ion-spinner icon="lines"></ion-spinner></div>';

    activate();

    function activate() {
      if (ionic.Platform.isAndroid()) {
        _template = '<div id="loading-spinner"><ion-spinner icon="android"></ion-spinner></div>';
      } else if (ionic.Platform.isIOS()) {
        _template = '<div id="loading-spinner"><ion-spinner icon="ios"></ion-spinner></div>';
      }

      $ionicLoading.hide();

      $scope.$on(_START_REQUEST_, function(value) {

        $ionicLoading.show({
          template: _template,
        });
      });

      $scope.$on(_END_REQUEST_, function(value) {
        $timeout(function() {$ionicLoading.hide();}, 500);
      });
    }

  }
})(angular);
