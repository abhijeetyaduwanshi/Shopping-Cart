var controller = angular.module('shoppingCartApp.specialtyPizzasController', []);
controller.controller('specialtyPizzasCtrl',['$scope', '$http', function($scope, $http) {
	// console.log("Hello world from the speclty pizzas controller");

	specialtyPizza1 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-extravaganzza.jpg',
		productTitle: 'ExtravaganZZa',
		productDescription: 'Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of cheese made with 100% real mozzarella.',
		productPrice: ''
	};

	specialtyPizza2 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-meatzza.jpg',
		productTitle: 'MeatZZa',
		productDescription: 'Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of cheese made with 100% real mozzarella.',
		productPrice: ''
	};

	specialtyPizza3 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-phillyCheeseSteak.jpg',
		productTitle: 'Philly Cheese Steak',
		productDescription: 'Tender slices of steak, fresh onions, fresh green peppers, fresh mushrooms, provolone and American cheese.',
		productPrice: ''
	};

	specialtyPizza4 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-pacificVeggie.jpg',
		productTitle: 'Pacific Veggie',
		productDescription: 'Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.',
		productPrice: ''
	};

	specialtyPizza5 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-honoluluHawaiian.jpg',
		productTitle: 'Honolulu Hawaiian',
		productDescription: 'Sliced ham, smoked bacon, pineapple, roasted red peppers, provolone and cheese made with 100% real mozzarella.',
		productPrice: ''
	};

	specialtyPizza6 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-deluxe.jpg',
		productTitle: 'Deluxe',
		productDescription: 'Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.',
		productPrice: ''
	};

	specialtyPizza7 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-caliChickenBaconRanch.jpg',
		productTitle: 'Cali Chicken Bacon Ranch',
		productDescription: 'Grilled chicken breast, garlic Parmesan white sauce, smoked bacon, tomatoes, provolone and cheese made with 100% real mozzarella.',
		productPrice: ''
	};

	specialtyPizza8 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-buffaloChicken.jpg',
		productTitle: 'Buffalo Chicken',
		productDescription: 'Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with a hot sauce.',
		productPrice: ''
	};

	specialtyPizza9 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-ultimatePepperoni.jpg',
		productTitle: 'Ultimate Pepperoni',
		productDescription: 'Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella then sprinkled with oregano.',
		productPrice: ''
	};

	specialtyPizza10 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-memphisBbqChicken.jpg',
		productTitle: 'Memphis BBQ Chicken',
		productDescription: 'Grilled chicken breast, BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella.',
		productPrice: ''
	};

	specialtyPizza11 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-wisconsin6Cheese.jpg',
		productTitle: 'Wisconsin 6 Cheese',
		productDescription: 'Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella and sprinkled with oregano.',
		productPrice: ''
	};

	specialtyPizza12 = {
		productImage: 'images/specialtyPizzas/specialtyPizza-spinachAndFeta.jpg',
		productTitle: 'Spinach & Feta',
		productDescription: 'Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.',
		productPrice: ''
	};

	var specialtyPizzaList = [specialtyPizza1, specialtyPizza2, specialtyPizza3, specialtyPizza4, specialtyPizza5, specialtyPizza6,
	 specialtyPizza7, specialtyPizza8, specialtyPizza9, specialtyPizza10, specialtyPizza11, specialtyPizza12];
	$scope.specialtyPizzaList = specialtyPizzaList;
}]);
