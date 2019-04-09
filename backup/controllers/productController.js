var myApp = angular.module('myApp', []);
myApp.controller('productCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the product controller");

	popularItemProduct1 = {
		productName: 'Large (14") Hand Tossed Pizza'
	};

	popularItemProduct2 = {
		productName: 'Large (14") Hand Tossed Pizza Whole: Pepperoni'
	};

	popularItemProduct3 = {
		productName: 'Medium (12") Hand Tossed Pizza Whole: Ham, Pinapple'
	};

	popularItemProduct4 = {
		productName: 'Medium (12") Hand Tossed Pizza Whole: Mashrooms, Pepperoni'
	};

	popularItemProduct5 = {
		productName: 'Medium (12") Hand Tossed Pacific Veggie'
	};

	popularItemProduct6 = {
		productName: 'Chicken Bacon Ranch Sandwich'
	};

	popularItemProduct7 = {
		productName: 'Chicken Alfredo Pasta'
	};

	popularItemProduct8 = {
		productName: '8-Piece BBQ Wings (1) Ranch'
	};

	popularItemProduct9 = {
		productName: 'Chocolate Lava Crunch Cakes'
	};

	var popularItemProductList = [[popularItemProduct1, popularItemProduct2, popularItemProduct3], [popularItemProduct4, popularItemProduct5, popularItemProduct6], [popularItemProduct7, popularItemProduct8, popularItemProduct9]];
	$scope.popularItemProductList = popularItemProductList;
}]);
