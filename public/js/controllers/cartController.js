controller = angular.module('shoppingCartApp.cartController', []);
controller.controller('cartCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {

    /**
     * checks if cart is empty
     * 
     * @param  {} cartedItems, items in cart
     */
    const isCartEmpty = (cartedItems) => {
        $scope.cartIsEmpty = cartedItems.length <= 0;
        return $scope.cartIsEmpty;
    }

    /**
     * populate the cart
     * 
     * @param  {} cartedItems, items in cart
     */
    const populateCart = (cartedItems) => {
        $http({
            method: 'GET',
            url: `/lookProduct/${cartedItems.itemId}/${cartedItems.type}`
        }).then(function success(response) {
            response.data.productCalculatedPrice = response.data.productPrice * cartedItems.count;
            response.data.productQuantity = cartedItems.count;
            $scope.products.push(response.data);
            $scope.productFinalPrice += parseFloat(response.data.productPrice);
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    /**
     * look up products from local storage
     */
    const productLookUp = () => {
        $scope.products = [];
        $scope.productFinalPrice = 0;
        const cartedItems = JSON.parse(localStorage.getItem("cartedItems")) || [];

        if (!isCartEmpty(cartedItems)) {
            for (let i = 0; i < cartedItems.length; i++) {
                populateCart(cartedItems[i]);
            }
        }
    }
    productLookUp();

    /**
     * remove products from cart
     * 
     * @param  {} productId, id of the product removed from cart
     */
    $scope.removeFromCart = productId => {
        const cartedItems = JSON.parse(localStorage.getItem("cartedItems"));

        for (let i = 0; i < cartedItems.length; i++) {
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
