'use strict';

(function() {
  angular.module('caminoFinancial')
    .factory('caminoFactory', caminoFactory);

    var factory = {};

    function caminoFactory($http) {
      factory.getProducts = function() {
        return $http.get('/products').then(function(data) {
          console.log('inside factory');
          return data;
        });
      }
      return factory;
    }
})();
