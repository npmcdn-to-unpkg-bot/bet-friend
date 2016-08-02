/******************************************************
 *
 * @class scripts/common/components/notify
 *
 * Module directive des modals simples de l'application.
 *
 *******************************************************/
(function() {

  'use strict';

  angular.module('directives').directive('notify', notify);

  notify.$inject = [];

  /* @ngInject */
  function notify() {

    var directive = {
      restrict: 'E',
      controller: NotifyController,
      controllerAs: 'notifyVm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  NotifyController.$inject = ['$scope', '$ionicPopup', '$translate', '_NOTIFY_APPLICATION_'];

    /* @ngInject */
  function NotifyController($scope, $ionicPopup, $translate, _NOTIFY_APPLICATION_) {
    var vm = this;
    vm.body = null;

    activate();

    function activate() {
      // Si l'évènement _NOTIFY_APPLICATION_
      $scope.$on(_NOTIFY_APPLICATION_, function(event, args) {
        var type = args.type;
        var okFn = args.okFn;
        var title = args.title;
        var btns;

        // On récupère le template du type de la modal
        if (type === 'error') {
          btns = [{
            text: $translate.instant('BTN.CANCEL'),
            type: 'button-dark'
          }];
        } else if (type === 'confirm') {
          btns = [{
            text: $translate.instant('BTN.CANCEL'),
          }, {
            text: $translate.instant('BTN.CONFIRM'),
            type: 'button-dark',
            onTap: okFn
          }];
        } else {
          btns = [{
            text: $translate.instant('BTN.CANCEL')
          }, {
            text: $translate.instant('BTN.OK'),
            type: 'button-dark',
            onTap: okFn
          }];
        }

        vm.body = args.body;

        var myPopup = $ionicPopup.show({
          template: '<div ng-repeat="item in notifyVm.body">{{ item }} </div>',
          title: title,
          scope: $scope,
          buttons: btns
        });
      });
    }
  }


})();
