'use strict';

(function() {
  angular.module('caminoFinancial')
    .controller('caminoController', caminoController);

    function caminoController($state, $scope, caminoFactory) {
      var caminoCtrl = this;

      caminoCtrl.productList = function() {
        $scope.ordersInProgress = 0;
        $scope.totalSales = 0;
        $scope.orderGoal = 260;
        $scope.lineGraphData = []
        caminoFactory.getProducts().then(function(response) {
          $scope.allProducts = response.data;
          response.data.forEach(function(product) {
              $scope.lineGraphData.push(product.ordersForLastTenDays);
              $scope.ordersInProgress += product.orders;
              $scope.totalSales += product.orders * product.price;
          })
          $scope.progressBarPercentage = Math.floor(($scope.ordersInProgress / $scope.orderGoal) * 100);
          $scope.completedOrders = $scope.orderGoal - $scope.ordersInProgress;
        });
      }
      caminoCtrl.productList();

      $scope.lineChartColors = [
  			{ backgroundColor: 'rgba(232, 95, 86, .9)', borderColor: 'rgba(232, 95, 86, 1)' },
  			{ backgroundColor: 'rgba(254, 199, 42, 0.7)', borderColor: 'rgba(254, 199, 42, 1)'},
  			{ backgroundColor: 'rgba(41, 208, 216, 0.5)', borderColor: 'rgba(41, 208, 216, 1)'},
		  ];

      $scope.lineChartXAxis= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      $scope.options = {
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                display: false
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  fontColor: "#9D5164"
                }
              }
            ]
          },
          elements: {
            point: {
                radius: 0
            }
          }
      };
    }
})();
