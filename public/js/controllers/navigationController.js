var controller = angular.module('shoppingCartApp.navigationController', []);
controller.controller('navigationCtrl',['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the navigation controller");

    // this method is to get the navigation data
    $http({
        method: 'GET',
        url: '/Navigation'
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.navigationItems = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });

    // this method is to get the carted item count from local storage
    var getCartCount = function() {
        $scope.itemsCount = 0;
        var cartedItems = JSON.parse(localStorage.getItem("cartedItems"));
        if (cartedItems !== null && cartedItems.length !== 0) {
            for (var i = 0; i < cartedItems.length; i++) {
                $scope.itemsCount += cartedItems[i].count++;
            }
        }
    };

    getCartCount();
    $scope.$on("itemAddedToCartCount", getCartCount);
}]);
