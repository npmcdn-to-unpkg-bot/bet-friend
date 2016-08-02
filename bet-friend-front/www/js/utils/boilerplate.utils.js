/*******************************************************************************
 *
 * @class js/utils/boilerplate.utils
 *
 * Fonction utilitaires transverses à l'application.
 *
 ******************************************************************************/
(function() {

  'use strict';

  angular.module('utils').factory('AppUtils', appUtils);

  /**
   * Injection de dépendances pour le service ajaxMgrFtr.
   */
  appUtils.$inject = [];

  /**
   * Fonction de configuration de la factory appUtils.
   *
   *
   * @return les méthodes publiques de la appUtils
   */
   /* @ngInject */
  function appUtils() {

    // /// API PUBLIQUE /////

    return {
      isEmptyString: isEmptyString,
      isoDateString: isoDateString,
      isEmptyObject: isEmptyObject
    };

    // /// IMPLEMENTATION /////

    function isEmptyObject(obj) {

      // null and undefined are "empty"
      if (obj === null) {
        return true;
      }

      // Assume if it has a length property with a non-zero value
      // that that property is correct.
      if (obj.length > 0) {
        return false;
      }
      if (obj.length === 0) {
        return true;
      }

      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    }

    /**
     * Méthode de vérification sur une string vide.
     *
     * @param pData:
     *            Données en entrée
     * @return : true si chaine vide/null/undefined, false sinon
     */
    function isEmptyString(pData) {
      return (!pData || pData.length === 0);
    }

    function isoDateString(d) {
      if (!isEmptyString(d)) {
        return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + '.' + ('00' + d.getMilliseconds()).slice(-3) + 'Z';
      } else {
        return '';
      }
    }

    function pad(n) {
      return n < 10 ? '0' + n : n;
    }
  }

})();
