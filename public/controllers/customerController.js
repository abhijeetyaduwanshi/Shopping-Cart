var myApp = angular.module('myApp', []);
myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the controller");

	var refresh = function() {
		$http.get('/customerList').then(function(response) {
			console.log("I got the data I requested");
			$scope.customerList = response.data;
			if($scope.customer !== undefined) {
				$scope.customer = "";
			};
		});
	};
	refresh();

	$scope.addCustomer = function() {
		console.log($scope.customer);
		$http.post('/customerList', $scope.customer).then(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.removeCustomer = function(id) {
		console.log(id);
		$http.delete('/customerList/' + id).then(function(response) {
			refresh();
		});
	};

	$scope.editCustomer = function(id) {
		console.log(id);
		$http.get('/customerList/' + id).then(function(response) {
			$scope.customer = response.data;
		});
	};

	$scope.updateCustomer = function() {
		console.log($scope.customer._id);
		$http.put('/customerList/' + $scope.customer._id, $scope.customer).then(function(response) {
			refresh();
		});
	};

	$scope.deselect = function() {
		$scope.customer = "";
	}
}]);
