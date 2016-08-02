(function(angular, undefined) {
  'use strict';

  angular.module('services').factory('RoundFactory', RoundFactory);

  RoundFactory.$inject = ['$filter', 'AjaxManagerFactory', 'StorageFactory'];

  /* @ngInject */
  function RoundFactory($filter, AjaxManagerFactory, StorageFactory) {

    var storage_round_key = "current_round";

    return ({
      startRound: startRound,
      setRound: setRound,
      getRound: getRound,
      toggleStateRound: toggleStateRound
    });

    ////// IMPLEMENTATION /////
    function startRound(client) {
      //TODO Ajax => _round = round
      setRound({
        round_id: 1,
        client_id: 1,
        client_name: "Super client",
        round_day: "16/03/2016",
        round_valid: false,
        sites: [{
          site_id: 3,
          site_name: "Site 3",
          site_valid: false,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [{
            id: 1,
            code: 1234
          }, {
            id: 2,
            code: 2345
          }],
          reprises: []
        }, {
          site_id: 1,
          site_name: "Site 1",
          site_valid: true,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [{
            id: 1,
            code: 1234
          }, {
            id: 2,
            code: 2345
          }],
          reprises: []
        }, {
          site_id: 2,
          site_name: "Site 2",
          site_valid: false,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [],
          reprises: []
        }, {
          site_id: 4,
          site_name: "Site 4",
          site_valid: false,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [],
          reprises: []
        }, {
          site_id: 5,
          site_name: "Site 5",
          site_valid: true,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [],
          reprises: []
        }, {
          site_id: 6,
          site_name: "Site 6",
          site_valid: true,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [],
          reprises: []
        }, {
          site_id: 7,
          site_name: "Site 7",
          site_valid: false,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [],
          reprises: []
        }, {
          site_id: 8,
          site_name: "Site 8",
          site_valid: false,
          address_detail: "2 rue de la volga",
          address_postal: "44470",
          address_commune: "CARQUEFOU",
          phone_number: "0609984966",
          phone_country: "+33",
          reception: [],
          remises: [],
          reprises: []
        }]
      });
    }

    function setRound(round) {
      StorageFactory.saveObject(storage_round_key, round);
    }

    function getRound() {
      return StorageFactory.retrieveObject(storage_round_key);
    }

    function toggleStateRound(idx) {

      var _round = getRound();

      if (_round.round_valid) {
        _round.round_valid = false;
        _round.round_valid_date = null;
      } else {
        _round.round_valid = true;
        _round.round_valid_date = new Date();
      }

      setRound(_round);
      return _round;
    }

  }

})(angular);
