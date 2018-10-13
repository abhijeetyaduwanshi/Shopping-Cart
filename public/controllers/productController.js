var myApp = angular.module('myApp', []);
myApp.controller('productCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the product controller");

	product1 = {
		productName: 'Popular Items',
		productMessage: 'No time to waste? Choose a meal and head stright for checkout.'
	};

 	product2 = {
		productName: 'Coupons',
		productMessage: 'Find the perfect hot online deal.'
	};

	product3 = {
		productName: 'Build Your Own Pizza',
		productMessage: 'Watch the pizza of your wildest dreams come to life.'
	};

	product4 = {
		productName: 'Specialty Pizzas',
		productMessage: 'Enjoy one of our chef-inspired pizza combinations.'
	};

	product5 = {
		productName: 'Pasta',
		productMessage: 'Prepared to order and baked to perfection.'
	};

	product6 = {
		productName: 'Oven Baked Sandwiches',
		productMessage: 'All on artisan bread with premium ingredients and baked to perfection.'
	};

	product7 = {
		productName: 'Chicken',
		productMessage: 'Specialty Chicken, Wings, and Boneless Chicken in a selection of bold flavors.'
	};

	product8 = {
		productName: 'Sides',
		productMessage: 'Complement your meal and your appetite.'
	};

	product9 = {
		productName: 'Drinks',
		productMessage: 'Quench your thirst.'
	};

	product10 = {
		productName: 'Desserts',
		productMessage: 'Satisfy your sweet tooth.'
	};

 	var productList = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
	$scope.productList = productList;
}]);
