var controller = angular.module('shoppingCartApp.chickenController', []);
controller.controller('chickenCtrl',['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the chicken controller");

	chicken1 = {
		productImage: 'images/chicken/chicken-specialtyChickenCrispyBaconAndTomato.jpg',
		productTitle: 'Specialty Chicken - Crispy Bacon & Tomato',
		productDescription: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with garlic parmesan white sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.',
		productPrice: ''
	};

	chicken2 = {
		productImage: 'images/chicken/chicken-specialtyChickenClassicHotBuffalo.jpg',
		productTitle: 'Specialty Chicken - Classic Hot Buffalo',
		productDescription: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with classic hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta.',
		productPrice: ''
	};

	chicken3 = {
		productImage: 'images/chicken/chicken-specialtyChickenSpicyJalapenoPineapple.jpg',
		productTitle: 'Specialty Chicken - Spicy Jalapeno - Pineapple',
		productDescription: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple.',
		productPrice: ''
	};

	chicken4 = {
		productImage: 'images/chicken/chicken-specialtyChickenSweetBbqBacon.jpg',
		productTitle: 'Specialty Chicken - Sweet BBQ Bacon',
		productDescription: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and smoky BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon.',
		productPrice: ''
	};

	chicken5 = {
		productImage: 'images/chicken/chicken-bonelessChicken.jpg',
		productTitle: 'Boneless Chicken',
		productDescription: 'Lightly breaded with savory herbs, made with 100% whole white breast meat. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese or Ranch.',
		productPrice: ''
	};

	chicken6 = {
		productImage: 'images/chicken/chicken-hotWings.jpg',
		productTitle: 'Hot Wings',
		productDescription: 'Marinated and oven-baked and then smothered in Hot Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch.',
		productPrice: ''
	};

	chicken7 = {
		productImage: 'images/chicken/chicken-bbqWings.jpg',
		productTitle: 'BBQ Wings',
		productDescription: 'Marinated and oven-baked and then smothered in BBQ Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch.',
		productPrice: ''
	};

	chicken8 = {
		productImage: 'images/chicken/chicken-plainWings.jpg',
		productTitle: 'Plain Wings',
		productDescription: 'Oven-baked to perfection. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch.',
		productPrice: ''
	};

	chicken9 = {
		productImage: 'images/chicken/chicken-sweetMangoHabaneroWings.jpg',
		productTitle: 'Sweet Mango Habanero Wings',
		productDescription: 'Marinated and oven-baked and then smothered in Sweet Mango Habanero Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch.',
		productPrice: ''
	};

	var chickenList = [chicken1, chicken2, chicken3, chicken4, chicken5,
	 chicken6, chicken7, chicken8, chicken9];
	$scope.chickenList = chickenList;
}]);
