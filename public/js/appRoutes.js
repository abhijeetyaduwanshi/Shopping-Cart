var myApp = angular.module('shoppingCartApp', [
	'ngRoute',
	'shoppingCartApp.myCustomNavBar',
	'shoppingCartApp.categoriesListController',
	'shoppingCartApp.specialtyPizzasController',
	'shoppingCartApp.breadsController',
	'shoppingCartApp.chickenController',
	'shoppingCartApp.dessertsController',
	'shoppingCartApp.pastaController',
	'shoppingCartApp.sandwichsController',
	'shoppingCartApp.saladsController',
	'shoppingCartApp.drinksController',
	'shoppingCartApp.extrasController'
	]);

myApp.config(function($routeProvider) {
	console.log("Hello world from the route provider");

	$routeProvider
	.when('/', {
		templateUrl: '../views/home.html',
		controller: 'categoriesListCtrl'
	})
	.when('/SpecialtyPizzas', {
		templateUrl: '../views/specialtyPizzas.html',
		controller: 'specialtyPizzasCtrl'
	})
	.when('/Bread', {
		templateUrl: '../views/breads.html',
		controller: 'breadsCtrl'
	})
	.when('/Chicken', {
		templateUrl: '../views/chicken.html',
		controller: 'chickenCtrl'
	})
	.when('/Dessert', {
		templateUrl: '../views/desserts.html',
		controller: 'dessertsCtrl'
	})
	.when('/Pasta', {
		templateUrl: '../views/pasta.html',
		controller: 'pastaCtrl'
	})
	.when('/Sandwich', {
		templateUrl: '../views/sandwichs.html',
		controller: 'sandwichsCtrl'
	})
	.when('/Salad', {
		templateUrl: '../views/salads.html',
		controller: 'saladsCtrl'
	})
	.when('/AllDrinks', {
		templateUrl: '../views/drinks.html',
		controller: 'drinksCtrl'
	})
	.when('/Extras', {
		templateUrl: '../views/extras.html',
		controller: 'extrasCtrl'
	});
});
