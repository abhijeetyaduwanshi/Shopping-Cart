var controller = angular.module('shoppingCartApp.breadsController', []);
controller.controller('breadsCtrl',['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the breads controller");

    // this method is to get the breads data
    $http({
        method: 'GET',
        url: '/Breads'
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.products = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
