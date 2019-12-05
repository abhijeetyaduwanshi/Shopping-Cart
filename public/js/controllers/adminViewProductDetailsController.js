var controller = angular.module('shoppingCartApp.adminViewProductDetailsController', []);
controller.controller('adminViewProductDetailsCtrl', ['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the product details controller");

    // GET: products list in a category
    var onlyCatName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    $http({
        method: 'GET',
        url: '/AdminGetTitle/' + onlyCatName
    }).then(function success(response) {
        $scope.productsList = response.data;
        $scope.catName = onlyCatName;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
