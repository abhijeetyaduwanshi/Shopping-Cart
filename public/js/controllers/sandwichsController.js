var controller = angular.module('shoppingCartApp.sandwichsController', []);
controller.controller('sandwichsCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the sandwichs controller");

	sandwich1 = {
		productImage: 'images/sandwichs/sandwich-buffaloChicken.jpg',
		productTitle: 'Buffalo Chicken',
		productDescription: 'Grilled chicken breast, creamy blue cheese sauce, fresh onions, hot sauce, cheddar and provolone cheeses. On artisan bread and baked to a golden brown.',
		productPrice: ''
	};

	sandwich2 = {
		productImage: 'images/sandwichs/sandwich-chickenHabanero.jpg',
		productTitle: 'Chicken Habanero',
		productDescription: 'Grilled chicken breast, pineapple, jalapeños, sweet mango habanero sauce, provolone and cheddar cheeses. On artisan bread and baked to a golden brown.',
		productPrice: ''
	};


	sandwich3 = {
		productImage: 'images/sandwichs/sandwich-mediterraneanVeggie.jpg',
		productTitle: 'Mediterranean Veggie',
		productDescription: 'Roasted red peppers, banana peppers, diced tomatoes, fresh baby spinach, fresh onions, feta, provolone and American cheese. On artisan bread and baked to a golden brown.',
		productPrice: ''
	};

	sandwich4 = {
		productImage: 'images/sandwichs/sandwich-phillyCheeseSteak.jpg',
		productTitle: 'Philly Cheese Steak',
		productDescription: 'Experience deliciously tender slices of steak, American and provolone cheeses, fresh onions, fresh green peppers and fresh mushrooms placed on artisan bread and baked to golden brown perfection.',
		productPrice: ''
	};

	sandwich5 = {
		productImage: 'images/sandwichs/sandwich-chickenBaconRanch.jpg',
		productTitle: 'Chicken Bacon Ranch',
		productDescription: 'Enjoy our flavorful grilled chicken breast topped with smoked bacon, creamy ranch and provolone cheese on artisan bread baked to golden brown perfection.',
		productPrice: ''
	};

	sandwich6 = {
		productImage: 'images/sandwichs/sandwich-italian.jpg',
		productTitle: 'Italian',
		productDescription: 'Pepperoni, salami, and ham topped with banana peppers, fresh green peppers, fresh onions, and provolone cheese. On artisan bread and baked to a golden brown.',
		productPrice: ''
	};

	sandwich7 = {
		productImage: 'images/sandwichs/sandwich-chickenParm.jpg',
		productTitle: 'Chicken Parm',
		productDescription: 'Grilled chicken breast, tomato basil marinara, Parmesan-Asiago and provolone cheese. On artisan bread and baked to a golden brown.',
		productPrice: ''
	};

	var products = [sandwich1, sandwich2, sandwich3, sandwich4, sandwich5, sandwich6, sandwich7];
	$scope.products = products;
}]);
