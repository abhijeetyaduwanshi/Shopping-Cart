var controller = angular.module('shoppingCartApp.saladsController', []);
controller.controller('saladsCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the salads controller");

	$http({
		method: 'GET',
		url: '/Salad'
	}).then(function success(response){
		console.log("I got the data I requested");
		$scope.products = response.data;
	},function errorCallback(error){
		// TODO: add error page code here
	});
}]);
