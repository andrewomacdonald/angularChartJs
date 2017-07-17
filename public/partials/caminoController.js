'use strict';

(function() {
  angular.module('caminoFinancial')
    .controller('caminoController', caminoController);

    function caminoController($state, $scope, caminoFactory) {
      var caminoCtrl = this;

      caminoCtrl.productList = function() {
        $scope.ordersInProgress = 0;
        $scope.totalSales = 0;
        $scope.orderGoal = 259;
        $scope.chartSales = [];
        $scope.chartTitles = [];
        $scope.lineGraphData = []
        caminoFactory.getProducts().then(function(response) {
          console.log('YOU GOT THE PRODUCTS! ARENT YOU A CLEVER FELLA.', response.data);
          $scope.allProducts = response.data;
          response.data.forEach(function(product) {
              $scope.lineGraphData.push(product.ordersForLastTenDays);
              $scope.ordersInProgress += product.orders;
              $scope.totalSales += product.orders * product.price;
              $scope.chartSales.push(product.price);
              $scope.chartTitles.push(product.product);
          })
          $scope.progressBarPercentage = Math.floor(($scope.ordersInProgress / $scope.orderGoal) * 100);
          $scope.completedOrders = $scope.orderGoal - $scope.ordersInProgress;
          console.log('orders for last 10 days ', $scope.lineGraphData);
        });
      }
      caminoCtrl.productList();

      $scope.bottomRow = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
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
