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
		templateUrl: '../views/productView.html',
		controller: 'breadsCtrl'
	})
	.when('/Chicken', {
		templateUrl: '../views/productView.html',
		controller: 'chickenCtrl'
	})
	.when('/Dessert', {
		templateUrl: '../views/productView.html',
		controller: 'dessertsCtrl'
	})
	.when('/Pasta', {
		templateUrl: '../views/productView.html',
		controller: 'pastaCtrl'
	})
	.when('/Sandwich', {
		templateUrl: '../views/productView.html',
		controller: 'sandwichsCtrl'
	})
	.when('/Salad', {
		templateUrl: '../views/productView.html',
		controller: 'saladsCtrl'
	})
	.when('/AllDrinks', {
		templateUrl: '../views/productView.html',
		controller: 'drinksCtrl'
	})
	.when('/Extras', {
		templateUrl: '../views/productView.html',
		controller: 'extrasCtrl'
	});
});
