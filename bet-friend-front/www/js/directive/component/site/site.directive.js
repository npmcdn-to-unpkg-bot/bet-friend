(function(angular, cordova, undefined) {
  'use strict';
  angular.module('directives').directive('site', site);

  site.$inject = [];

  /* @ngInject */
  function site() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/site/main.html',
      controller: SiteController,
      controllerAs: 'sitevm',
      bindToController: true // because the scope is isolated
    };

    return directive;

  }

  /**
   * Injection de dépendances.
   */
  SiteController.$inject = ['$ionicPlatform', '$window', '$stateParams', '$translate', 'SiteFactory', '$scope', '$ionicPopup'];

  /* @ngInject */
  function SiteController($ionicPlatform, $window, $stateParams, $translate, SiteFactory, $scope, $ionicPopup) {

    var vm = this;
    vm.validation = null;
    vm.call = _call;
    vm.scan = _scan;
    vm.modal_scanned = _modal_scanned;
    vm.remove_scan = _remove_scan;
    vm.validate = _validate;

    $ionicPlatform.ready(function() {
      _activate();
    });

    // Private functions
    function _activate() {
      vm.site = SiteFactory.getSite($stateParams.idx);
      _changeSiteValidationState();
    }

    function _call(phonenumber) {
      $window.location.href = "tel:" + phonenumber;
    }

    function _modal_scanned(type, number) {

      if (number > 0) {

        var btns = [{
          text: $translate.instant('BTN.CANCEL'),
          type: 'button-dark'
        }];

        if (type === "REC") {
          _modal('app/site/modal/scanned_reception.html', btns, $translate.instant('SITE.RECEPTION'));
        } else if (type === 'DEL') {
          _modal('app/site/modal/scanned_delivery.html', btns, $translate.instant('SITE.DELIVERY'));
        } else if (type === 'TAK') {
          _modal('app/site/modal/scanned_takeback.html', btns, $translate.instant('SITE.TAKEBACK'));
        }

      }
    }

    function _remove_scan(colIdx, type) {
      vm.site = SiteFactory.removeScan($stateParams.idx, type, colIdx);
    }

    function _scan() {
      if (cordova && cordova.plugins.barcodeScanner) {
        cordova.plugins.barcodeScanner.scan(
          function(result) {
            if (!result.cancelled) {
              if ("QR_CODE" === result.format && result.text.length > 12 && "PROXIMYSCAN" === result.text.substring(0, 11)) {
                //CurrentRoundDataStore.setNewRemise({ "code": result.text.split("_").pop(), "scan_date" : uiHelper.getTodayMoment()});
                // Modifier site & localStorage
                vm.site = SiteFactory.addScan($stateParams.idx, "DEL", result.text.split("_").pop());

                alert("Code valide");
              } else {
                alert("Code invalide");
              }
            }

          },
          function(error) {
            alert("Echec de la tentative de scan");
          }
        );
      }
    }

    function _validate() {

      //TODO Envoyer serveur
      // A mettre la suite dans le callback de succès
      vm.site = SiteFactory.toggleStateSite($stateParams.idx);
      _changeSiteValidationState();

    }

    function _changeSiteValidationState() {
      if (vm.site.site_valid) {
        vm.validation = {
          state: $translate.instant('SITE.VALIDATION.VALID'),
          change: {
            class: "bar-assertive",
            value: $translate.instant('SITE.VALIDATION.INVALIDATE')
          }
        };
      } else {
        vm.validation = {
          state: $translate.instant('SITE.VALIDATION.INVALID'),
          change: {
            class: "bar-balanced",
            value: $translate.instant('SITE.VALIDATION.VALIDATE')
          }
        };
      }
    }

    function _modal(tmplUrl, btns, popTitle) {
      var scannedPopup = $ionicPopup.show({
        title: popTitle,
        templateUrl: tmplUrl,
        scope: $scope,
        buttons: btns
      });
    }
  }
})(angular, window.cordova);
