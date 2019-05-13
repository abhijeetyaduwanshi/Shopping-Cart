var controller = angular.module('shoppingCartApp.cartController', []);
controller.controller('cartCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the cart controller");
}]);
