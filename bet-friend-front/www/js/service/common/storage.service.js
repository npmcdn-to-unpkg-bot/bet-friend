(function(angular) {

  'use strict';

  angular.module('services').factory('StorageFactory', StorageFactory);

  StorageFactory.$inject = [ '$window'];

  /* @ngInject */
  function StorageFactory($window) {

    ///// API PUBLIQUE /////

    return {
      save: save,
      retrieve: retrieve,
      saveObject: saveObject,
      retrieveObject: retrieveObject,
      clear: clear,
      clearStore: clearStore
    };

    ///// IMPLEMENTATION /////

    /**
     * Sauvegarde d'une chaine dans le local storage.
     *
     * @param name : Nom de la clé
     * @param date : valeur
     */
    function save(name, data) {
      $window.localStorage[name] = data;
    }

    /**
     * Récupération d'une chaine dans le local storage.
     *
     * @param name : Nom de la clé
     * @param defaultValue : Valeur par défaut
     * @return la valeur associé à la clé
     */
    function retrieve(name, defaultValue) {
      return $window.localStorage[name] || defaultValue;
    }

    /**
     * Sauvegarde d'un objet dans le local storage.
     *
     * @param name : Nom de la clé
     * @param date : valeur
     */
    function saveObject(name, data) {
       $window.localStorage[name] = JSON.stringify(data);
    }

    /**
     * Récupération d'un objet dans le local storage.
     *
     * @param name : Nom de la clé
     * @return la valeur associé à la clé
     */
    function retrieveObject(name) {
      return JSON.parse($window.localStorage[name] || '{}');
    }

    /**
     * Suppression de la clé du local storage.
     *
     * @param name : Nom de la clé
     */
    function clear(name) {
      $window.localStorage[name] = null;
    }

    /**
     * Suppression de TOUTES les clés du local storage.
     */
    function clearStore() {
      angular.forEach($window.localStorage, function(storeKey) {
        // Delete the current key from Amplify storage
        $window.localStorage[name] = null;
      });
    }

  }

})(angular);
