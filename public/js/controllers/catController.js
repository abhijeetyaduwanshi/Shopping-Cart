controller = angular.module('shoppingCartApp.catController', []);
controller.controller('catCtrl',['$rootScope', '$scope', '$http', '$location', function($rootScope, $scope, $http, $location) {

    /**
     * local variables
     */
    const catName = $location.url();
    const onlyCatName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    /**
     * get cat data
     */
    $http({
        method: 'GET',
        url: catName
    }).then(function success(response) {
        $scope.products = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });

    /**
     * adds item to local storage for cart
     * 
     * @param  {} item, product added to cart
     * @param  {} isDesktopDevice, device type: mobile or desktop
     */
    $scope.addToCart = (item, isDesktopDevice) => {
        const items = [];
        let returningItem = false;
        $scope.itemAddedToCart = item;

        const itemDetails = {
            itemId: item.id,
            type: onlyCatName,
            count: 1
        };

        items.push(itemDetails);

        if (JSON.parse(localStorage.getItem("cartedItems")) == null) {
            localStorage.setItem("cartedItems", JSON.stringify(items));
        } else {
            const cartedItems = JSON.parse(localStorage.getItem("cartedItems"));
            for (let i = 0; i < cartedItems.length; i++) {
                if (cartedItems[i].itemId == itemDetails.itemId) {
                    cartedItems[i].count++;
                    returningItem = true;
                    break;
                }
            }

            if (!returningItem) {
                cartedItems.push(itemDetails);
            }

            localStorage.setItem("cartedItems", JSON.stringify(cartedItems));
        }

        $rootScope.$broadcast("itemAddedToCartCount");
        if (isDesktopDevice) {
            window.location = "#!/Cart";
        }
    };

    /**
     * navigate to cart page
     */
    $scope.navigateToCart = () => {
        window.location = "#!/Cart";
    };
}]);
