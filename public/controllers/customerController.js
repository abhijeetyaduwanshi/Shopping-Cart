var myApp = angular.module('myApp', []);
myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the controller");

	var refresh = function() {
		$http.get('/customerList').then(function(response) {
			console.log("I got the data I requested");
			$scope.customerList = response.data;
		});
	};
	refresh();

	$scope.addCustomer = function() {
		console.log($scope.customer);
		$http.post('/customerList', $scope.customer).then(function(response) {
			console.log(response);
			refresh();
			if($scope.customer !== undefined) {
				$scope.customer = "";
			};
		});
	};
}]);
