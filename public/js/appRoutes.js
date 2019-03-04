var myApp = angular.module('shoppingCartApp', [
	'ngRoute',
	'shoppingCartApp.myCustomNavBar',
	'shoppingCartApp.categoriesListController',
	'shoppingCartApp.specialtyPizzasController',
	'shoppingCartApp.breadsController',
	'shoppingCartApp.chickenController',
	'shoppingCartApp.dessertsController',
	'shoppingCartApp.pastaController',
	'shoppingCartApp.sandwichsController'
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
	});
});
