var controller = angular.module('shoppingCartApp.saladsController', []);
controller.controller('saladsCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the salads controller");

	salad1 = {
		productImage: 'images/salads/salad-classicGarden.jpg',
		productTitle: 'Classic Garden',
		productDescription: 'A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.',
		productPrice: ''
	};

	salad2 = {
		productImage: 'images/salads/salad-chickenCaesar.jpg',
		productTitle: 'Chicken Caesar',
		productDescription: 'The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.',
		productPrice: ''
	};

	var saladsList = [salad1, salad2];
	$scope.saladsList = saladsList;
}]);
