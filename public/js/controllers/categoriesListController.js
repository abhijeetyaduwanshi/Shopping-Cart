var controller = angular.module('shoppingCartApp.categoriesListController', []);
controller.controller('categoriesListCtrl',['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the categories list controller");

	categoryItem1 = {
		categoryId: 'category-buildYourOwnPizza',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Build Your Own Pizza',
		categoryDescription: 'Watch the pizza of your wildest dreams come to life.'
	};

	categoryItem2 = {
		categoryId: 'category-specialtyPizza',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Specialty Pizzas',
		categoryDescription: 'Enjoy one of our chef-inspired pizza combinations.'
	};

	categoryItem3 = {
		categoryId: 'category-bread',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Breads',
		categoryDescription: 'Experience oven baked goodness with an order of our delicious breads.'
	};

	categoryItem4 = {
		categoryId: 'category-chicken',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Chicken',
		categoryDescription: 'Specialty Chicken, Wings, and Boneless Chicken in a selection of bold flavors.'
	};

	categoryItem5 = {
		categoryId: 'category-desserts',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Desserts',
		categoryDescription: 'Satisfy your sweet tooth.'
	};

	categoryItem6 = {
		categoryId: 'category-pasta',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Pasta',
		categoryDescription: 'Prepared to order and baked to perfection.'
	};

	categoryItem7 = {
		categoryId: 'category-sandwich',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Oven Baked Sandwiches',
		categoryDescription: 'All on artisan bread with premium ingredients and baked to perfection.'
	};

	categoryItem8 = {
		categoryId: 'category-salads',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Salads',
		categoryDescription: 'Domino\'s Salads, the perfect compliment to pizza.'
	};

	categoryItem9 = {
		categoryId: 'category-drinks',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Drinks',
		categoryDescription: 'Quench your thirst.'
	};

	categoryItem10 = {
		categoryId: 'category-extras',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Extras',
		categoryDescription: 'Add extra taste to you entree.'
	};

	categoryItem11 = {
		categoryId: 'category-popularItems',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Popular Items',
		categoryDescription: 'No time to waste? Choose a meal and head straight for checkout.'
	};

	categoryItem12 = {
		categoryId: 'category-coupons',
		categoryRoute: '',
		categoryImage: '',
		categoryTitle: 'Coupons',
		categoryDescription: 'Find the perfect hot online deal.'
	};

	var categoryItemsList = [categoryItem1, categoryItem2, categoryItem3, categoryItem4, categoryItem5,
	 categoryItem6, categoryItem7, categoryItem8, categoryItem9, categoryItem10, categoryItem11, categoryItem12];
	$scope.categoryItemsList = categoryItemsList;
}]);
