// Factory des ingrédients
(function(angular, undefined) {
  'use strict';

  angular.module('services').factory('LoginFactory', LoginFactory);

  LoginFactory.$inject = ['AjaxManagerFactory'];

  /* @ngInject */
  function LoginFactory(AjaxManagerFactory) {

    return ({
      authentication: authentication
    });

    ////// IMPLEMENTATION /////
    function authentication(criteria) {
      return AjaxManagerFactory.postJson('/Api/Login', {}, criteria);
    }

  }

})(angular);
