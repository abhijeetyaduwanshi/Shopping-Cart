var controller = angular.module('shoppingCartApp.adminController', []);
controller.controller('adminCtrl', ['$scope', '$http', function($scope, $http) {
	// console.log("Hello world from the admin controller");

	// this method is to get the category data
	var refresh = function() {
		$http({
			method: 'GET',
			url: '/Admin'
		}).then(function success(response) {
			// console.log("I got the data I requested");
			$scope.categoryItemsList = response.data;
		}, function errorCallback(error) {
			// TODO: add error page code here
		});
	};
	refresh();

	// this method is to post the category data
	$scope.addCategoryItem = function() {
		// console.log($scope.categoryItem);
		$http({
			method: 'POST',
			url: '/Admin',
			data: $scope.categoryItem
		}).then(function success(response) {
			// console.log(response);
			refresh();
			$scope.categoryItem = {};
		}, function errorCallback(error) {
			// TODO: add error page code here
		});
	};
}]);
