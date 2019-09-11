var controller = angular.module('shoppingCartApp.cartController', []);
controller.controller('cartCtrl', ['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the cart controller");

    // this method is to get the cart data
    $http({
        method: 'GET',
        url: '/Cart'
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.products = [];
        $scope.productFinalPrice = 0;

        for(var i = 0; i < response.data.length; i++) {
            var id = response.data[i].itemId;
            var type = response.data[i].type;

            $http({
                method: 'GET',
                url: type + '/' + id
            }).then(function success(response) {
                // console.log(response.data);
                $scope.products.push(response.data);
                $scope.productFinalPrice += response.data.productPrice;
                // console.log($scope.products);
            }, function errorCallback(error) {
                // TODO: add error page code here
            });
        };
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
