var controller = angular.module('shoppingCartApp.categoriesListController', []);
controller.controller('categoriesListCtrl',['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the categories list controller");

	categoryItem1 = {
		categoryId: 'category-buildYourOwnPizza',
		categoryRoute: '',
		categoryImage: 'images/categoryItems/build-your-own-pizza.png',
		categoryTitle: 'Build Your Own Pizza',
		categoryDescription: 'Watch the pizza of your wildest dreams come to life.'
	};

	categoryItem2 = {
		categoryId: 'category-specialtyPizza',
		categoryRoute: '#!/SpecialtyPizzas',
		categoryImage: 'images/categoryItems/specialty-pizzas.png',
		categoryTitle: 'Specialty Pizzas',
		categoryDescription: 'Enjoy one of our chef-inspired pizza combinations.'
	};

	categoryItem3 = {
		categoryId: 'category-bread',
		categoryRoute: '#!/Bread',
		categoryImage: 'images/categoryItems/breads.png',
		categoryTitle: 'Breads',
		categoryDescription: 'Experience oven baked goodness with an order of our delicious breads.'
	};

	categoryItem4 = {
		categoryId: 'category-chicken',
		categoryRoute: '#!/Chicken',
		categoryImage: 'images/categoryItems/chicken.png',
		categoryTitle: 'Chicken',
		categoryDescription: 'Specialty Chicken, Wings, and Boneless Chicken in a selection of bold flavors.'
	};

	categoryItem5 = {
		categoryId: 'category-desserts',
		categoryRoute: '#!/Dessert',
		categoryImage: 'images/categoryItems/desserts.png',
		categoryTitle: 'Desserts',
		categoryDescription: 'Satisfy your sweet tooth.'
	};

	categoryItem6 = {
		categoryId: 'category-pasta',
		categoryRoute: '#!/Pasta',
		categoryImage: 'images/categoryItems/pasta.png',
		categoryTitle: 'Pasta',
		categoryDescription: 'Prepared to order and baked to perfection.'
	};

	categoryItem7 = {
		categoryId: 'category-sandwich',
		categoryRoute: '#!/Sandwich',
		categoryImage: 'images/categoryItems/oven-baked-sandwiches.png',
		categoryTitle: 'Oven Baked Sandwiches',
		categoryDescription: 'All on artisan bread with premium ingredients and baked to perfection.'
	};

	categoryItem8 = {
		categoryId: 'category-salads',
		categoryRoute: '',
		categoryImage: 'images/categoryItems/salads.png',
		categoryTitle: 'Salads',
		categoryDescription: 'Domino\'s Salads, the perfect compliment to pizza.'
	};

	categoryItem9 = {
		categoryId: 'category-drinks',
		categoryRoute: '',
		categoryImage: 'images/categoryItems/drinks.png',
		categoryTitle: 'Drinks',
		categoryDescription: 'Quench your thirst.'
	};

	categoryItem10 = {
		categoryId: 'category-extras',
		categoryRoute: '',
		categoryImage: 'images/categoryItems/extras.png',
		categoryTitle: 'Extras',
		categoryDescription: 'Add extra taste to you entree.'
	};

	categoryItem11 = {
		categoryId: 'category-popularItems',
		categoryRoute: '',
		categoryImage: 'images/categoryItems/popular-items.png',
		categoryTitle: 'Popular Items',
		categoryDescription: 'No time to waste? Choose a meal and head straight for checkout.'
	};

	categoryItem12 = {
		categoryId: 'category-coupons',
		categoryRoute: '',
		categoryImage: 'images/categoryItems/coupons.png',
		categoryTitle: 'Coupons',
		categoryDescription: 'Find the perfect hot online deal.'
	};

	var categoryItemsList = [categoryItem1, categoryItem2, categoryItem3, categoryItem4, categoryItem5,
	 categoryItem6, categoryItem7, categoryItem8, categoryItem9, categoryItem10, categoryItem11, categoryItem12];
	$scope.categoryItemsList = categoryItemsList;
}]);
