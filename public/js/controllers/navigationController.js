var controller = angular.module('shoppingCartApp.navigationController', []);
controller.controller('navigationCtrl',['$scope', '$http', function($scope, $http) {
    // console.log("Hello world from the navigation controller");

    // this method is to get the navigation data
    $http({
        method: 'GET',
        url: '/Navigation'
    }).then(function success(response) {
        // console.log("I got the data I requested");
        $scope.navigationItems = response.data;
        console.log(response.data)
    }, function errorCallback(error) {
        // TODO: add error page code here
    });
}]);
