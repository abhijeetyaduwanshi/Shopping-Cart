var controller = angular.module('shoppingCartApp.cartController', []);
controller.controller('cartCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
    // console.log("Hello world from the cart controller");

    // this method is to populate the cart
    var populateCart = function(cartedItems) {
        $http({
            method: 'GET',
            url: '/lookProduct/' + cartedItems.itemId + '/' + cartedItems.type
        }).then(function success(response) {
            response.data.productCalculatedPrice = response.data.productPrice * cartedItems.count;
            response.data.productQuantity = cartedItems.count;
            $scope.products.push(response.data);
            $scope.productFinalPrice += parseFloat(response.data.productPrice);
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    // this method is to look up products from local storage
    var productLookUp = function() {
        $scope.products = [];
        $scope.productFinalPrice = 0;
        var cartedItems = JSON.parse(localStorage.getItem("cartedItems"));

        for (var i = 0; i < cartedItems.length; i++) {
            populateCart(cartedItems[i]);
        }
    }
    productLookUp();

    // this method is to remove products from cart
    // TODO: removing a single item, JS splice is used
    // which removed the item from array
    // but the entire cart except for the removed item
    // is re-written to local storage
    $scope.removeFromCart = function(productId) {
        var cartedItems = JSON.parse(localStorage.getItem("cartedItems"));

        for (var i = 0; i < cartedItems.length; i++) {
            if (cartedItems[i].itemId == productId) {
                cartedItems.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cartedItems", JSON.stringify(cartedItems));
        productLookUp();
        $rootScope.$broadcast("itemRemovedFromCart");
    };
}]);
