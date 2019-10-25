var controller = angular.module('shoppingCartApp.catController', []);
controller.controller('catCtrl',['$scope', '$http', '$location', function($scope, $http, $location) {
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

    // this method is to add the onlyCatName items to cart
    $scope.addToCart = function(id) {
        // console.log(id);
        var itemDetails = {
            itemId: id,
            type: onlyCatName,
            count: 1
        };

        // sending the onlyCatName id and type, id will be used to look up the onlyCatName item
        // and type will be used to look up collection in mongodb
        $http({
            method: 'POST',
            url: '/AddToCart',
            data: itemDetails
        }).then(function success(response) {
            // console.log(response);
        }, function errorCallback(error) {
            // TODO: add error page code here
        });

        window.location = "#!/Cart";
    };
}]);
