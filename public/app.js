(function() {
  angular.module('caminoFinancial', ['ui.router', 'chart.js'])
    .config(['$stateProvider', function($stateProvider) {

      var applicationStates = [{
        name: 'home',
        url: '/',
        templateUrl: 'partials/caminoFinancial.html',
        controller: 'caminoController',
        controllerAs: 'caminoCtrl'
      },
      {
        name: 'otherwise',
        url: '*path',
        templateUrl: 'partials/caminoFinancial.html',
        controller: 'caminoController',
        controllerAs: 'caminoCtrl'
      }];


      applicationStates.forEach(function(state) {
        console.log('fuudfudufuhf');
         $stateProvider.state(state);
      });

    }])

    .filter('removeSpaces', [function() {
      return function(string) {
        if(!angular.isString(string)) {
          return string;
        }
        return string.replace(/[\s]/g, '');
      };
    }])

})();
