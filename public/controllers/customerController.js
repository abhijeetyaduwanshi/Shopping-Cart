var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http',	function($scope, $http) {
	console.log("Hello world from the controller");

	$http.get('/customerList').then(function(response) {
		console.log("I got the data I requested");
		$scope.customerList = response.data;
	});
}]);
