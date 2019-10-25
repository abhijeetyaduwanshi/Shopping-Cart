var controller = angular.module('shoppingCartApp.saladsController', []);
controller.controller('saladsCtrl', ['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the salads controller");

    // this method is to get the salads data
    $http({
        method: 'GET',
        url: '/Salads'
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.products = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });

    // this method is to add the salads items to cart
    $scope.addToCart = function(id) {
        // console.log(id);
        var itemDetails = {
            itemId: id,
            type: "Salads",
            count: 1
        };

        // sending the salad id and type, id will be used to look up the salad item
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
