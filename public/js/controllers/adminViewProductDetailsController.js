var controller = angular.module('shoppingCartApp.adminViewProductDetailsController', []);
controller.controller('adminViewProductDetailsCtrl', ['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the product details controller");

    // GET: products list in a category
    var onlyCatName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    var refresh = function() {
        $http({
            method: 'GET',
            url: '/AdminGetTitle/' + onlyCatName
        }).then(function success(response) {
            $scope.productsList = response.data;
            $scope.catName = onlyCatName;
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    }
    refresh();

    // POST: products data to category table
    // params: table name, of the category
    $scope.addProductsToCategory = function() {
        var product = $scope.productItem;

        $http({
            method: 'POST',
            url: '/AdminAddProduct/' + onlyCatName,
            data: product
        }).then(function success(response) {
            // console.log(response);
            refresh();
            $scope.productItem = {};
        }, function errorCallback(errorCallback) {
            // TODO: add error page code here
        });
    };

    // this function is to view the details of a product item
    // params: id, of the product
    $scope.viewProductDetails = function(productId) {
        // console.log(productId);
        $http({
            method: 'GET',
            url: '/Admin/ViewProductDetails/' + productId + '/' + onlyCatName
        }).then(function success(response) {
            // console.log(response);
            $scope.selectedProductItem = {};
            $scope.selectedProductItem = response.data[0];
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    // this function is to delete product item
    // params: id and name, of the product
    $scope.deleteProduct = function(productId, productTitle) {
        console.log(productId);
        console.log(productTitle);
    };

    // this method is to put the product data
    // params: id, of the product
    $scope.updateProduct = function(id) {
        var productItem = $scope.selectedProductItem;
        // console.log(productItem);
        $http({
            method: 'PUT',
            url: '/Admin/EditProduct/' + id + '/' + onlyCatName,
            data: productItem
        }).then(function success(response) {
            // console.log(response);
            $scope.selectedProductItem = {};
            refresh();
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };
}]);
