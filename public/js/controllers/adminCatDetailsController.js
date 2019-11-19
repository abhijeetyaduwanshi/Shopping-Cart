var controller = angular.module('shoppingCartApp.adminCatDetailsController', []);
controller.controller('adminCatDetailsCtrl',['$scope', '$http', '$location', function($scope, $http, $location) {
    // console.log("Hello world from the categories details controller");

    var onlyCatName = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    // this function is to view the details of a category item
    // params: id, of the category
    $http({
        method: 'GET',
        url: '/getThisCatDetails/' + onlyCatName
    }).then(function success(response) {
        // console.log(response);
        $scope.selectedCategoryItem = response.data[0];
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
