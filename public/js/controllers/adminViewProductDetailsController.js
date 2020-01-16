controller = angular.module('shoppingCartApp.adminViewProductDetailsController', []);
controller.controller('adminViewProductDetailsCtrl', ['$scope', '$http', function($scope, $http) {

    /**
     * local variable
     */
    const onlyCatName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

    /**
     * get products data
     */
    const refresh = () => {
        $http({
            method: 'GET',
            url: `/AdminGetTitle/${onlyCatName}`
        }).then(function success(response) {
            $scope.productsList = response.data;
            $scope.catName = onlyCatName;
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    }
    refresh();

    /**
     * add products data to category
     */
    $scope.addProductsToCategory = () => {
        const product = $scope.productItem;

        $http({
            method: 'POST',
            url: `/AdminAddProduct/${onlyCatName}`,
            data: product
        }).then(function success(response) {
            refresh();
            $scope.productItem = {};
        }, function errorCallback(errorCallback) {
            // TODO: add error page code here
        });
    };

    /**
     * view product details
     * 
     * @param  {} productId, of the product
     */
    $scope.viewProductDetails = productId => {
        $http({
            method: 'GET',
            url: `/Admin/ViewProductDetails/${productId}/${onlyCatName}`
        }).then(function success(response) {
            $scope.selectedProductItem = {};
            $scope.selectedProductItem = response.data[0];
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    /**
     * delete product item
     * 
     * @param  {} productId, of the product
     * @param  {} productTitle, of the product
     */
    $scope.deleteProduct = productId, productTitle => {
        // console.log(productId);
        // console.log(productTitle);
    };

    /**
     * update product data
     * 
     * @param  {} id, of the product
     */
    $scope.updateProduct = id => {
        const productItem = $scope.selectedProductItem;
        $http({
            method: 'PUT',
            url: `/Admin/EditProduct/${id}/${onlyCatName}`,
            data: productItem
        }).then(function success(response) {
            $scope.selectedProductItem = {};
            refresh();
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };
}]);
