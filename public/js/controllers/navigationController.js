controller = angular.module('shoppingCartApp.navigationController', []);
controller.controller('navigationCtrl',['$scope', '$http', function($scope, $http) {

    /**
     * get navigation data
     */
    $http({
        method: 'GET',
        url: '/Navigation'
    }).then(function success(response) {
        $scope.navigationItems = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });

    /**
     * get carted item count
     */
    const getCartCount = () => {
        $scope.itemsCount = 0;
        const cartedItems = JSON.parse(localStorage.getItem("cartedItems"));
        if (cartedItems !== null && cartedItems.length !== 0) {
            for (let i = 0; i < cartedItems.length; i++) {
                $scope.itemsCount += cartedItems[i].count++;
            }
        }
    };

    getCartCount();
    $scope.$on("itemAddedToCartCount", getCartCount);
    $scope.$on("itemRemovedFromCart", getCartCount);
}]);
