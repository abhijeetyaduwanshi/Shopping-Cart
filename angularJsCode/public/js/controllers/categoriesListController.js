controller = angular.module('shoppingCartApp.categoriesListController', []);
controller.controller('categoriesListCtrl',['$scope', '$http', function($scope, $http) {

    /**
     * get category list data
     */
    $http({
        method: 'GET',
        url: '/Home'
    }).then(function success(response) {
        $scope.categoryItemsList = response.data;
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
