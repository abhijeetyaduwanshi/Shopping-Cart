var controller = angular.module('shoppingCartApp.pastaController', []);
controller.controller('pastaCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the pasta controller");

	pasta1 = {
		productImage: 'images/pasta/pasta-chickenAlfredo.jpg',
		productTitle: 'Chicken Alfredo',
		productDescription: 'Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection.',
		productPrice: ''
	};

	pasta2 = {
		productImage: 'images/pasta/pasta-italianSausageMarinara.jpg',
		productTitle: 'Italian Sausage Marinara',
		productDescription: 'Penne pasta baked in a zesty tomato basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.',
		productPrice: ''
	};

	pasta3 = {
		productImage: 'images/pasta/pasta-chickenCarbonara.jpg',
		productTitle: 'Chicken Carbonara',
		productDescription: 'Taste the delectable blend of flavorful grilled chicken breast, smoked bacon, fresh onions, and fresh mushrooms mixed with penne pasta. Baked to perfection with rich Alfredo sauce.',
		productPrice: ''
	};

	pasta4 = {
		productImage: 'images/pasta/pasta-pastaPrimavera.jpg',
		productTitle: 'Pasta Primavera',
		productDescription: 'Fresh baby spinach, diced tomatoes, fresh mushrooms and fresh onions, mixed with penne pasta and baked with a creamy Alfredo sauce.',
		productPrice: ''
	};

	pasta5 = {
		productImage: 'images/pasta/pasta-buildYourOwnPasta.jpg',
		productTitle: 'Build Your Own Pasta',
		productDescription: 'Choose a sauce and up to 3 ingredients from more than a dozen meat or vegetable toppings.',
		productPrice: ''
	};

	var pastaList = [pasta1, pasta2, pasta3, pasta4, pasta5];
	$scope.pastaList = pastaList;
}]);
