var controller = angular.module('shoppingCartApp.chickenController', []);
controller.controller('chickenCtrl',['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the chicken controller");

    // this method is to get the chicken data
    $http({
        method: 'GET',
        url: '/Chicken'
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.products = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
