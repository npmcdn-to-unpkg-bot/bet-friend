(function(angular, undefined) {
  'use strict';

  angular.module('services').factory('SiteFactory', SiteFactory);

  SiteFactory.$inject = ['RoundFactory', 'StorageFactory'];

  /* @ngInject */
  function SiteFactory(RoundFactory, StorageFactory) {

    var storage_round_key = "current_round";

    return ({
      getSite: getSite,
      updateSite: updateSite,
      addScan: addScan,
      removeScan: removeScan,
      toggleStateSite: toggleStateSite
    });

    function getSite(idx) {

      var _round = RoundFactory.getRound();

      return _round.sites[idx];
    }

    function updateSite(idx, site) {

      var _round = RoundFactory.getRound();

      _round.sites[idx] = site;

      RoundFactory.setRound(_round);

      return site;
    }

    function addScan(idx, type, value) {

      var _site = getSite(idx);

      if (type === "REM") {
        _site.remises.push(value);
      } else if (type === "REP") {
        _site.reprises.push(value);
      } else if (type === "ACC") {
        _site.accueil = value;
      }

      return updateSite(idx, _site);
    }

    function removeScan(idx, type, colIdx) {

      var _site = getSite(idx);

      if (type === "REC") {
        _site.reception.splice(colIdx, 1);
      } else if (type === 'DEL') {
        _site.remises.splice(colIdx, 1);
      } else if (type === 'TAK') {
        _site.reprises.splice(colIdx, 1);
      }

      return updateSite(idx, _site);
    }

    function toggleStateSite(idx) {

      var _site = getSite(idx);

      if (_site.site_valid) {
        _site.site_valid = false;
        _site.site_valid_date = null;
      } else {
        _site.site_valid = true;
        _site.site_valid_date = new Date();
      }

      return updateSite(idx, _site);
    }

  }

})(angular);
