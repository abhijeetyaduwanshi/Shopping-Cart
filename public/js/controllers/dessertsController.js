var controller = angular.module('shoppingCartApp.dessertsController', []);
controller.controller('dessertsCtrl', ['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the desserts controller");

    // this method is to get the desserts data
    $http({
        method: 'GET',
        url: '/Desserts'
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.products = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
