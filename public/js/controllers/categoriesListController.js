var controller = angular.module('shoppingCartApp.categoriesListController', []);
controller.controller('categoriesListCtrl',['$scope', '$http', function($scope, $http) {
	// console.log("Hello world from the categories list controller");

	// this method is to get the category list data
	$http({
		method: 'GET',
		url: '/Home'
	}).then(function success(response) {
		// console.log("I got the data I requested");
		$scope.categoryItemsList = response.data;
	}, function errorCallback(error) {
		// TODO: add error page code here
	});
}]);
