var controller = angular.module('shoppingCartApp.catController', []);
controller.controller('catCtrl',['$rootScope', '$scope', '$http', '$location', function($rootScope, $scope, $http, $location) {
    // console.log("Hello world from the cat controller");

    console.log($location.url());
    console.log((window.location.href.substr(window.location.href.lastIndexOf('/') + 1)));

    var catName = $location.url();
    var onlyCatName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    // this method is to get the cat data
    $http({
        method: 'GET',
        url: catName
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.products = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });

    // this method is to add the onlyCatName item to local storage for cart
    $scope.addToCart = function(id) {
        // console.log(id);
        var items = [];
        var returningItem = false;

        var itemDetails = {
            itemId: id,
            type: onlyCatName,
            count: 1
        };

        items.push(itemDetails);

        if (JSON.parse(localStorage.getItem("cartedItems")) == null) {
            localStorage.setItem("cartedItems", JSON.stringify(items));
        } else {
            var cartedItems = JSON.parse(localStorage.getItem("cartedItems"));
            for (var i = 0; i < cartedItems.length; i++) {
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
        window.location = "#!/Cart";
    };
}]);
