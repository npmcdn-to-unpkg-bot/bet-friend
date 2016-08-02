(function() {

  'use strict';

  angular.module('services').factory('AjaxManagerFactory', AjaxManagerFactory);

  /**
   * IoC.
   */
  AjaxManagerFactory.$inject = ['$http', '$q', '$translate', '_SERVER_'];

  /* @ngInject */
  function AjaxManagerFactory($http, $q, $translate, _SERVER_) {

    ///// API /////

    return {
      postJson: postJson,
      getJson: getJson
    };

    ///// IMPLEMENTATION /////

    /**
     * Méthode d'appel Ajax de type POST d'un objet JSON.
     */
    function postJson(pUrl, pParam, pData) {

      var request = $http({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        url: _SERVER_.url + pUrl,
        params: ajaxLanguageParam(pParam),
        data: pData
      });

      return request.then(handleSuccess, handleError);
    }

    /**
     * Méthode d'appel Ajax de type GET d'un objet JSON.
     */
    function getJson(pUrl, pParam) {

      var request = $http({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        url: _SERVER_.url + pUrl,
        params: ajaxLanguageParam(pParam)
      });

      return request.then(handleSuccess, handleError);
    }

    /**
     * JSON Param format.
     */
    function ajaxLanguageParam(pParam) {

      var obj = (typeof pParam !== "undefined") ? pParam : {};
      obj.lang = $translate.use();

      return obj;

    }

    /**
     * I transform the error response, unwrapping the application dta from
     * the API response payload.
     */
    function handleError(response) {
      return ($q.reject(response.data));
    }

    /**
     * I transform the successful response, unwrapping the application data
     * from the API response payload.
     */
    function handleSuccess(response) {
      return (response.data);
    }

  }

})();
