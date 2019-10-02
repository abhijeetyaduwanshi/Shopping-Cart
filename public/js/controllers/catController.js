var controller = angular.module('shoppingCartApp.catController', []);
controller.controller('catCtrl',['$scope', '$http', '$location', function($scope, $http, $location) {
    // console.log("Hello world from the cat controller");

    console.log($location.url());

    var catName = $location.url();
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
}]);
